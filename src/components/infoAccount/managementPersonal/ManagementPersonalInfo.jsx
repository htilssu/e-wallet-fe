import { FaClipboardUser } from "react-icons/fa6"; //management-user-icon
import { FaUserCircle } from "react-icons/fa"; //user-icon
import { FaShield } from "react-icons/fa6"; //shield-icon
import { FaLock } from "react-icons/fa"; //lock-icon
import { FaTableCellsRowLock } from "react-icons/fa6"; //tranLock-icon
import { FaUserCog } from "react-icons/fa";//user-icon
import { NavLink, Outlet, Routes, Route, useNavigate } from "react-router-dom"; //ChangeLink library
import InfoAccount from './infoAccountAuth/InfoAccount';


const ManagementPersonalInfo = () => {
    const navigate = useNavigate();

    //Set first child `info-account`
    const navigateToInfoAccount = () => {
        navigate('/management-personal/info-account');
    };

    return (
        <div className="management-account w-auto mx-20 px-14">

            {/* TitleManagementAccount */}
            <div className="flex items-center w-auto mb-5">
                <div><FaClipboardUser size={21} color="#0f8be8" /></div>
                <div className="font-medium text-xl ml-2">Quản trị tài khoản</div>
            </div>

            {/* OptionContent */}
            <div className="grid grid-cols-4 w-full h-auto mb-16">
                {/* Dad */}
                <div className="col-span-1 grid grid-rows-5 gap-y-2 mr-2 bg-slate-100 w-auto max-h-75 rounded-lg p-2 items-center">
                    {/* InFoAccount */}
                    <NavLink to="info-account" className="row-span-1 w-auto h-full items-center py-4 hover:rounded-md bg pl-3 flex hover:bg-dimPrimaryColor cursor-pointer group" onClick={navigateToInfoAccount}>
                        <div className="group-hover:text-primaryColor text-textGray"><FaUserCircle size={20} /></div>
                        <p className="ml-3 font-medium text-md text-textGray">Thông tin tài khoản</p>
                    </NavLink>
                    {/* SettingAdmitTransaction */}
                    <NavLink to="transaction-account" className="row-span-1 w-auto h-full items-center py-4 hover:rounded-md bg pl-3 flex hover:bg-dimPrimaryColor cursor-pointer group">
                        <div className="group-hover:text-primaryColor text-textGray"><FaShield size={20} /></div>
                        <p className="ml-3 font-medium text-md text-textGray">Cấu hình xác thực giao dịch</p>
                    </NavLink>
                    {/* ChangePassword */}
                    <NavLink to="change-password" className="row-span-1 w-auto h-full items-center py-4 hover:rounded-md bg pl-3 flex hover:bg-dimPrimaryColor cursor-pointer group">
                        <div className="group-hover:text-primaryColor text-textGray"><FaLock size={20} /></div>
                        <p className="ml-3 font-medium text-md text-textGray">Đổi mật khẩu</p>
                    </NavLink>
                    {/* ChangeTransactionPassword */}
                    <div className="row-span-1 w-auto h-full items-center py-4 hover:rounded-md bg pl-3 flex hover:bg-dimPrimaryColor cursor-pointer group">
                        <div className="group-hover:text-primaryColor text-textGray"><FaTableCellsRowLock size={20} /></div>
                        <p className="ml-3 font-medium text-md text-textGray">Đổi mật khẩu giao dịch</p>
                    </div>
                    {/* SettingLevelUser */}
                    <div className="row-span-1 w-auto h-full items-center py-4 hover:rounded-md bg pl-3 flex hover:bg-dimPrimaryColor cursor-pointer group">
                        <div className="group-hover:text-primaryColor text-textGray"><FaUserCog size={20} /></div>
                        <p className="ml-3 font-medium text-md text-textGray">Cài đặt phân quyền</p>
                    </div>
                </div>

                {/* Child*/}
                {/* Change on Child */}
                <div className="col-span-3">
                    {/* first child*/}
                    <Routes>
                        <Route path="/" element={<InfoAccount />} />
                    </Routes>
                    {/* change another child*/}
                    <Outlet /> 
                </div>
            </div>
        </div>
    )
}
export default ManagementPersonalInfo;
