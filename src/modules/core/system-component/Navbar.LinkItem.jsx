const NavbarLinkItem = () => {
  return (
    <div>
      <div
        className="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <ul className="flex flex-col font-medium md:p-0 text-black rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li>
            <a
              href="#"
              className="block text-white md:text-black md:hover:text-primary py-2 px-3 bg-primary rounded md:bg-transparent md:p-0 "
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0  md:dark:hover:text-blue-500   md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500  md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-blue-500  md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLinkItem;
