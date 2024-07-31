﻿import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../../../util/requestUtil";
import { ToastContainer, toast } from 'react-toastify';

const NavbarAvatar = ({ logout }) => {
  const dropDownSection = useRef();

  const [user, setUser] = useState({});

  useEffect(() => {
    get("/api/v1/user")
    .then((res) => 
    {
      setUser(res.data);
    })
    .catch((res) => {
      if (res.data && res.data.message) {
          toast.error(res.data.message);
      }
  });
  }, []);

  let isShowUserDropDown = false;

  function toggleUserDropDown() {
    isShowUserDropDown = !isShowUserDropDown;
    if (isShowUserDropDown) {
      dropDownSection.current.classList.toggle("hidden");
    } else {
      setTimeout(() => {
        dropDownSection.current.classList.toggle("hidden");
      }, 150);
    }
    dropDownSection.current.classList.toggle("opacity-0");
  }

  let hideShowUserDropDownTimeout;

  function handleMouseOut() {
    hideShowUserDropDownTimeout = setTimeout(() => {
      toggleUserDropDown();
    }, 500);
  }

  function handleMouseOver() {
    if (hideShowUserDropDownTimeout) {
      clearTimeout(hideShowUserDropDownTimeout);
    }
  }

  return (
    <div className={"h-full"}>
      <button
        onClick={toggleUserDropDown}
        type="button"
        className="h-full flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <img
          className="h-full rounded-full"
          src="/card_bg.jpg"
          alt="user photo"
        />
      </button>
      <div
        ref={dropDownSection}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        className="z-50 hidden transition-opacity overflow-hidden flex flex-col w-40 border-gray-300 border-1 opacity-0 ease-in-out left-1/2 -translate-x-1/2 bg-white shadow text-black absolute top-full mt-2 list-none rounded-lg"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm font-medium text-gray-900">{user.lastName} {user.firstName}</span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
            {user.userName ? user.userName : `User${user.id}`}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-blue-200 transition-colors ease-in-out"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-blue-200 transition-colors ease-in-out"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-blue-200 transition-colors ease-in-out"
            >
              Earnings
            </a>
          </li>
          <li>
            <Link
              onClick={logout}
              to={"/"}
              className="block px-4 py-2 text-sm hover:bg-blue-200 transition-colors ease-in-out"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default NavbarAvatar;
