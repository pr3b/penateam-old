import React from 'react'

const DashboardMainNav = () => {
  const open = false; 

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
          <div
            // onClick={closeDropdown}
            className="ml-3 relative"
            // x-data={{ open: false }}
          >
            <div>
              <button
                // onClick={toggleDropdown}
                className="max-w-xs mr-6 flex items-center text-sm focus:outline-none focus:shadow-outline"
              >
                <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <span className="px-3 font-medium text-sm text-gray-500">
                  Cahyo Subroto
                </span>
                <svg
                  className="fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.254"
                  height="7"
                  viewBox="0 0 11.254 7"
                >
                  <g id="pO66u9.tif" transform="translate(11.254 7) rotate(180)">
                    <g id="Group_1812" transform="translate(0 0)">
                      <path
                        id="Path_5641"
                        d="M5.625,0,0,5.621,1.367,7,5.639,2.719,9.9,6.988l1.356-1.36Z"
                      />
                      <path
                        id="Path_5642"
                        d="M5.625,0l5.628,5.627L9.9,6.988,5.639,2.719,1.367,7,0,5.621Z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            {open && (
              <div className="origin-top-right absolute top-0 right-0 mt-2 w-48 rounded-md shadow-lg">
                <div className="py-1 bg-white rounded-md shadow-xs">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Account Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMainNav