import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // Import icon close button

const SidebarManage = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Admin Menu</h2>
          <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none hover:text-primaryColor">
            <AiOutlineClose />
          </button>
        </div>
        <ul className="space-y-2">
          <li>
            <Link to="/accounts" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-primaryColor transition duration-300" style={{ textDecoration: 'none' }}>Quản lý tài khoản</Link>
          </li>
          <li>
            <Link to="/dashboard/customer-manage" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-primaryColor transition duration-300" style={{ textDecoration: 'none' }}>Quản lý khách hàng</Link>
          </li>
          <li>
            <Link to="/lookup" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-primaryColor transition duration-300" style={{ textDecoration: 'none' }}>Quản lý tra cứu</Link>
          </li>
          <li>
            <Link to="/statistics" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-primaryColor transition duration-300" style={{ textDecoration: 'none' }}>Quản lý thống kê</Link>
          </li>
          <li>
            <Link to="/transactions" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-primaryColor transition duration-300" style={{ textDecoration: 'none' }}>Quản lý giao dịch</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarManage;
