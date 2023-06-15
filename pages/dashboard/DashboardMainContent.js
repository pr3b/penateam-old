import React, { useRef, useEffect } from 'react'
import KanbanBoard from './page/KanbanBoard';
import TableInvoices from './page/TableInvoices';
import SubscribeStatus from './page/SubscribeStatus';

const DashboardMainContent = ({activeNavItem}) => {
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.focus();
  }, []);

  return (
    <main
      className="flex-1 relative z-0 overflow-y-auto focus:outline-none py-6"
      tabIndex="0"
      x-init="$el.focus()"
      id="scrollable-main"
      ref={mainRef}
    >
      {/* Komponent Navigasi Dashboard Requests */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Navigasi Dashboard to Request */}

        {/* Komponen title + button export data create request */}
        <div className="mt-2 md:flex md:items-center md:justify-between">
          {/* Title Request */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-600 sm:text-3xl sm:leading-10 break-normal sm:truncate">
              User Dashboard
            </h2>
          </div>

          {/* Button Create Request */}
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <span className="lg:ml-3 shadow-sm rounded-md">
              <a
                href="https://penateam.com/service-requests/submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-yellow-700 transition duration-150 ease-in-out"
              >
                Create request
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Komponent Main Request (Kanban) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div>
            <div className="flex flex-col">
              <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-4 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full overflow-hidden border-t-none border border-gray-200 custom-rounded-b-sm">
                  {activeNavItem === 'invoices' && <TableInvoices />}
                  {activeNavItem === 'requests' && <KanbanBoard />}
                  {activeNavItem === 'dashboard' && <SubscribeStatus />}

                  <a className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-yellow-400 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-yellow-500" href="https://twitter.com/heykaiyo" target="_blank">
                    <div className="flex items-center justify-center h-6 w-6 bg-yellow-500 rounded-full">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </div>
                    <span className="text-sm ml-1 leading-none text-gray-400">@Pena</span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponent Powered by */}
      <div className="inset-x-0 bottom-0 text-center">
        <p className="mt-2 text-sm text-gray-500">
          Powered by <span> </span>
          <a
            href="https://penateam.com"
            target="_blank"
            className="text-yellow-500"
            rel="noopener noreferrer"
          >
            Penateam
          </a>
        </p>
      </div>
    </main>
  )
}

export default DashboardMainContent