// src/components/DropdownMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({buttonText, options=[]}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-lg border  border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-white hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          {buttonText}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                options.map((item, idx)=>{
                    return (<Link
                        key={idx}
                        href={item.optionRoute}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {item.optionName}
                      </Link>
                      )
                })
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;