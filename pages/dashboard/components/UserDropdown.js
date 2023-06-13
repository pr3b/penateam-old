import { useSession, signOut } from 'next-auth/react';
import React, { useState, useEffect, useRef } from 'react';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data: session} = useSession()
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        closeDropdown()
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="ml-3 relative z-50" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
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
            {session?.user?.email}
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
      {isOpen && (
        <div className="origin-top-right absolute top-0 right-0 mt-2 w-48 rounded-md shadow-lg">
          <div className="py-1 bg-white rounded-md shadow-xs">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 pointer-events-none"
            >
              Account Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 pointer-events-none"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => signOut()}
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
