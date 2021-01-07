import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import './Header.css';
import useOnClickOutside from '../../../utils/CloseOnOutsideClick';
import { NavLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../../../queries/user-queries';

type HeaderProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  setIsAuthenticated,
}: HeaderProps): JSX.Element {
  const refProfil = useRef(null);
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);
  const [openProfilDropdown, setOpenProfilDropdown] = useState<boolean>(false);
  const [logout] = useMutation(LOG_OUT);

  const clickToLogOut = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('error');
      // setErrorMessage(error.message);
    }
  };

  useOnClickOutside(refProfil, () =>
    setOpenProfilDropdown(!openProfilDropdown)
  );

  return (
    <nav className="bg-gray-800 flex-none">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* /***** Searchbar */}
          <div className="bg-gray-200">
            <div className="hidden lg:block relative">
              <input
                type="text"
                className="h-8 w-96 pr-8 pl-5 rounded z-0 focus:shadow-color-white focus:"
                placeholder="Search anything..."
              />
              <div className="absolute top-4 right-3">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
              </div>
            </div>
            <div className="block lg:hidden">
              <button onClick={() => setOpenSearchbar(!openSearchbar)}>
                SEARCH
              </button>
              {openSearchbar && (
                <>
                  <input
                    type="text"
                    className="absolute top-4 h-8 w-5/6 pr-8 pl-5 rounded z-0 focus:shadow-color-white z-10"
                    placeholder="Search anything..."
                  />
                </>
              )}
            </div>
          </div>
          {/*  */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch">
            <div className="flex-shrink-0 flex items-center lg:mr-80">
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              /> */}
              <NavLink to="/">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </NavLink>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div onClick={() => setOpenProfilDropdown(!openProfilDropdown)}>
                <button
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              {openProfilDropdown && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                  ref={refProfil}
                >
                  <NavLink
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/profil"
                  >
                    Profile
                  </NavLink>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    onClick={() => clickToLogOut()}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
