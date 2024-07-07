import { useAuth } from "../../../hooks/useAuth.jsx";
import { AiOutlineMenu } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

const navbarItem = [
  {
    name: "Home",
  },
  {
    name: "Test",
    items: [
      {
        name: "Test 1",
        link: "/test1",
      },
      {
        name: "Test 1",
        link: "/test1",
      },
      {
        name: "Test 1",
        link: "/test1",
      },
      {
        name: "Test 1",
        link: "/test1",
      },
    ],
  },
];

const Navbar = () => {
  const { user, setUser } = useAuth();

  return (
    <nav className="w-full h-20 items-center z-10 shadow bg-white fixed top-0 left-0 border-gray-200 ">
      <div className="h-full w-full max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="h-full flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/e-wallet.png" className="h-full" alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
            EWallet
          </span>
        </a>
        <div className="h-full gap-2 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="h-full text-white bg-primary hover:bg-blue-600 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
          <button
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
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 border-1 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="true"
          >
            <TiThMenu />
          </button>
        </div>
        <div
          className="items-center top-full left-0 absolute md:static justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 text-black border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block text-primary py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
