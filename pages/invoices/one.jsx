import React from 'react'
import CustomCursor from "../components/CustomCursor";
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"
import PenaLogo from "../../public/assets/images/logo/pena-text.png";
import Image from 'next/image'; 

function one() {
  return (
    <>
    <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
      <defs>
        <style>
          {`
            body {
              background-color: #fee440;
            }
            svg {
              position: fixed;
              z-index: -1;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
            }
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            .out-top {
              animation: rotate 20s linear infinite;
              transform-origin: 13px 25px;
            }
            .in-top {
              animation: rotate 10s linear infinite;
              transform-origin: 13px 25px;
            }
            .out-bottom {
              animation: rotate 25s linear infinite;
              transform-origin: 84px 93px;
            }
            .in-bottom {
              animation: rotate 15s linear infinite;
              transform-origin: 84px 93px;
            }
          `}
        </style>
      </defs>
      <path
        fill="#91d0d6"
        className="out-top"
        d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
      />
      <path
        fill="#e8580b"
        className="in-top"
        d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
      />
      <path
        fill="#efa4a4"
        className="out-bottom"
        d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
      />
      <path
        fill="#212121"
        className="in-bottom"
        d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
      />
    </svg>
    <CustomCursor customCursor={CursorSVG} />
    <section class="py-20 flex justify-center items-center">
 <div class="max-w-5xl mx-10 py-10 bg-white rounded-3xl">
  <article class="overflow-hidden">
   <div class="bg-[white] rounded-b-md">
    <div class="p-9">
     <div class="space-y-6 text-slate-700">
      <Image src={PenaLogo} width={100} alt='Pena Logo' />

      {/* <p class="text-xl font-extrabold tracking-tight uppercase font-body">
       Penateam
      </p> */}
     </div>
    </div>
    <div class="p-9">
     <div class="flex w-full">
      <div class="grid grid-cols-4 gap-12">
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">
         Invoice Detail:
        </p>
        <p>Unwrapped</p>
        <p>Fake Street 123</p>
        <p>San Javier</p>
        <p>CA 1234</p>
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Billed To</p>
        <p>The Boring Company</p>
        <p>Tesla Street 007</p>
        <p>Frisco</p>
        <p>CA 0000</p>
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Invoice Number</p>
        <p>000000</p>

        <p class="mt-2 text-sm font-normal text-slate-700">
         Date of Issue
        </p>
        <p>00.00.00</p>
       </div>
       <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Terms</p>
        <p>0 Days</p>

        <p class="mt-2 text-sm font-normal text-slate-700">Due</p>
        <p>00.00.00</p>
       </div>
      </div>
     </div>
    </div>

    <div class="p-9">
     <div class="flex flex-col mx-0 mt-8">
      <table class="min-w-full divide-y divide-slate-500">
       <thead>
        <tr>
         <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
          Description
         </th>
         <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
          Quantity
         </th>
         <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
          Rate
         </th>
         <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
          Amount
         </th>
        </tr>
       </thead>
       <tbody>
        <tr class="border-b border-slate-200">
         <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
          <div class="font-medium text-slate-700">Tesla Truck</div>
          <div class="mt-0.5 text-slate-500 sm:hidden">
           1 unit at $0.00
          </div>
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          48
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          $0.00
         </td>
         <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr class="border-b border-slate-200">
         <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
          <div class="font-medium text-slate-700">
           Tesla Charging Station
          </div>
          <div class="mt-0.5 text-slate-500 sm:hidden">
           1 unit at $75.00
          </div>
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          4
         </td>
         <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          $0.00
         </td>
         <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>

       </tbody>
       <tfoot>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Subtotal
         </th>
         <th scope="row" class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Subtotal
         </th>
         <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Discount
         </th>
         <th scope="row" class="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Discount
         </th>
         <td class="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Tax
         </th>
         <th scope="row" class="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Tax
         </th>
         <td class="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
        <tr>
         <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
          Total
         </th>
         <th scope="row" class="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
          Total
         </th>
         <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr>
       </tfoot>
      </table>
     </div>
    </div>

    <div class="mt-48 p-9">
     <div class="border-t pt-9 border-slate-200">
      <div class="text-sm font-light text-slate-700">
       <p>
        Payment terms are 14 days. Please be aware that according to the
        Late Payment of Unwrapped Debts Act 0000, freelancers are
        entitled to claim a 00.00 late fee upon non-payment of debts
        after this time, at which point a new invoice will be submitted
        with the addition of this fee. If payment of the revised invoice
        is not received within a further 14 days, additional interest
        will be charged to the overdue account and a statutory rate of
        8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
        cannot contract out of the Act’s provisions.
       </p>
      </div>
     </div>
    </div>
   </div>
  </article>
 </div>
</section>
    </>
  )
}

export default one