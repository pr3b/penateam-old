import React, {useState, useEffect, Suspense} from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const LoadingPlaceholder = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></span>
    </div>
  );
};

const TableInvoices = () => {
  const {data: session, status} = useSession()
  const userSessionEmail = session?.user?.email
  const [userInvoicesData, setUserInvoicesID] = useState([]);

  const formatAmount = (data) => {
    return (data / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  //Need to change into Table
  const getInvoicesByEmail = async () => {
    try {
      const response = await axios.post('/api/invoices', {
        customerEmail: userSessionEmail,
      });
      setUserInvoicesID(response.data?.invoices)
    } catch (error) {
      console.error('Error retrieving invoice IDs:', error);
    }
  };
  

  useEffect(() => {
    getInvoicesByEmail()
  }, [userSessionEmail])

  return (
    <>
      <div className="ml-8 mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h3
            className="text-xl font-bold leading-5 text-gray-600 sm:text-3xl sm:leading-10 break-normal sm:truncate"
          >
            Invoices
          </h3>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full overflow-hidden border border-gray-200 custom-rounded-sm">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Number
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Payment method
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-3 bg-gray-50">
                      <svg viewBox="0 -1.2 83.8 83.8" xmlns="http://www.w3.org/2000/svg" fill="#000000" width={24} height={24}>
                        <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="Group_20" transform="translate(-470.6 -883.7)">
                            <path id="Path_57" d="M551.9,929v24.1a9.5,9.5,0,0,1-9.5,9.5H482.6a9.5,9.5,0,0,1-9.5-9.5V929" fill="none" stroke="#848a96" strokeLinecap="round" strokeWidth={5}></path>
                            <path id="Path_58" d="M501.3,925.8l11.1,11,11.2-11.2" fill="none" stroke="#848a96" strokeLinecap="round" strokeWidth={5}></path>
                            <line id="Line_29" y2="25.2" transform="translate(512.5 911.6)" fill="none" stroke="#848a96" strokeLinecap="round" strokeWidth={5}></line>
                            <circle id="Ellipse_1" cx="3.4" cy="3.4" r="3.4" transform="translate(509.1 896.4)" fill="#848a96" stroke="#848a96" strokeWidth={1}></circle>
                            <circle id="Ellipse_2" cx="3.4" cy="3.4" r="3.4" transform="translate(509.1 884.2)" fill="#848a96" stroke="#848a96" strokeWidth={1}></circle>
                          </g>
                        </g>
                      </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {userInvoicesData.length === 0 ? (
                      <tr>
                        <td colSpan="6">
                          <LoadingPlaceholder />
                        </td>
                      </tr>
                    ):(
                      userInvoicesData.map((invoice, idx) => (
                      <Suspense key={idx} fallback={<LoadingPlaceholder />}>
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                          <a href={`${invoice.invoice_url}`} target="_blank" alt="Click to view invoice">
                            {invoice.id}
                          </a>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            Stripe
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {formatAmount(invoice.totalAmount)}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {invoice.status}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            {invoice.createdDate}
                          </td>
                          <td className="w-1 px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right text-sm leading-5 font-medium">
                            <a href={`${invoice.invoice_pdf_download}`} target="_blank" alt="Click to view invoice">
                              <svg 
                                width="24"
                                height="24" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#000000"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                  <rect x="0" fill="none" width="10" height="10"></rect>
                                  <g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.8 14H5v1h.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM11 2H3v16h13V7l-5-5zM7.2 14.6c0 .8-.6 1.4-1.4 1.4H5v1H4v-4h1.8c.8 0 1.4.6 1.4 1.4v.2zm4.1.5c0 1-.8 1.9-1.9 1.9H8v-4h1.4c1 0 1.9.8 1.9 1.9v.2zM15 14h-2v1h1.5v1H13v1h-1v-4h3v1zm0-2H4V3h7v4h4v5zm-5.6 2H9v2h.4c.6 0 1-.4 1-1s-.5-1-1-1z"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          </td>                        
                        </tr>
                      </Suspense>
                    ))
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default TableInvoices;
