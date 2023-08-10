import React from 'react'
import UserDropdown from './components/UserDropdown';

const DashboardMainNav = () => {
  return (
    <div className="relative flex-shrink-0 flex h-16 bg-white shadow-sm">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex"></div>
        <div className="flex items-center md:ml-6">
          {/* Notification Komponen */}
          <div className="inline-flex items-center mr-3"> 
            {/* Masih deaktif - pointer-events-none */}
            <a
              href="https://penateam.com/notifications"
              className="group text-gray-200 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 pointer-events-none"
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
          </div>

          {/* User Component */}
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}

export default DashboardMainNav