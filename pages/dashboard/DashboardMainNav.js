import React from 'react'
import UserDropdown from './components/UserDropdown';

const DashboardMainNav = () => {
  return (
    <div className="relative flex-shrink-0 flex h-16 bg-white shadow-sm">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex"></div>
        <div className="ml-4 flex items-center md:ml-6">
          {/* Notification Komponen */}
          <div className="inline-flex items-center mr-3"> 
            <a
              href="https://penateam.com/notifications"
              className="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            {/* <div
              x-show={open}
              className="origin-top-right absolute top-14 right-0 mr-6 rounded-md z-10"
            >
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs overflow-hidden max-w-xs sm:max-w-lg">
                  <div className="z-20 relative grid gap-6 bg-white px-2 pt-3 pb-3 overflow-x-hidden overflow-y-auto max-h-96"></div>
                  <a
                    href="https://penateam.com/notifications"
                    className="px-5 py-4 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 justify-center hover:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <div className="flow-root">
                      <div className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900">
                        <span>All notifications</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* User Component */}
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}

export default DashboardMainNav