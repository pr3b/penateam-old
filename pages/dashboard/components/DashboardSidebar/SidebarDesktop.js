import React, {useEffect, useState} from 'react'
import Image from 'next/image'

const SidebarDesktop = ({ activeNavItem, onNavItemClick }) => {
  const [originUrl, setOriginUrl] = useState('');

  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);

  const handleItemClick = (navItem) => {
    onNavItemClick(navItem);
  };
  console.log(activeNavItem, "data active")

  return (
    <div className="flex flex-col w-64">
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-white">
        <a href={originUrl}>
          <Image
            className="h-8 w-auto"
            src="https://drive.google.com/uc?export=view&id=1weC8vFQhpBLCcLQYfiouM5dcW5YdQ_TN"
            alt="Portal logo"
            width={200}
            height={200}
          />
        </a>
      </div>
      <div className="h-0 flex-1 flex flex-col overflow-y-auto">
        <ul className="flex-1 px-2 py-4 bg-white">
          <li
            // href={`${originUrl}/dashboard`}
            className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            onClick={() => handleItemClick('dashboard')}
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
              />
            </svg>
            Dashboard
          </li>
          <span
            className="mt-6 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md cursor-default"
          >
            Orders
          </span>
          <li
            // href={`${originUrl}/dashboard`}
            className={`${activeNavItem === 'requests' ? 'active' : ''} group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150`}
            onClick={() => handleItemClick('requests')}
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            Requests
          </li>
          <li
            // href={`${originUrl}/dashboard`}
            className={`${activeNavItem === 'invoices' ? 'active' : ''} group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150`}
            onClick={() => handleItemClick('invoices')}
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
              />
            </svg>
            Invoices
          </li>
          <li
            // href={`${originUrl}/dashboard`}
            className={`${activeNavItem === 'invoices' ? 'active' : ''} group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150 pointer-events-none`}
            onClick={() => handleItemClick('settings')}
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
              />
            </svg>
            Settings
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarDesktop