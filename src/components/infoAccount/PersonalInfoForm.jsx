import {FaEdit} from "react-icons/fa";
import {MdAccountCircle} from "react-icons/md";
import {HiMiniCheckBadge} from "react-icons/hi2";
import Footer from "../footer/Footer.jsx";
import {useNavigate} from "react-router-dom";

function MyWallet() {
    const navigate = useNavigate();

    const handleTopup = (e) => {
        e.preventDefault();
        // Logic xác thực người dùng ở đây
        navigate('/topup');
    };
    return (
        <div className="p-4">
            <div className="mb-4">
                <div className="text-zinc-900 font-medium text-xl mb-2">VÍ CỦA TÔI</div>
                <div className="flex flex-wrap">
                    <div className={"p-2 w-1/2"}>
                        <p className="text-sm text-gray-600">Số dư tổng</p>
                        <p className="text-lg text-rose-600 font-semibold">{formattedAmount}</p>
                    </div>
                    <div className={"p-2 w-1/2"}>
                        <p className="text-sm text-gray-600">Số dư khả dụng</p>
                        <p className="text-lg font-semibold text-rose-600">0 đ</p>
                    </div>
                    <div className={"p-2 w-1/2"}>
                        <p className="text-sm text-gray-600">Số dư đóng băng</p>
                        <p className="text-lg font-semibold text-rose-600">{formattedAmount}</p>
                    </div>
                    <div className={"p-2 w-1/2"}>
                        <p className="text-sm text-gray-600">Số dư chờ chuyển</p>
                        <p className="text-lg font-semibold text-rose-600">0 đ</p>
                    </div>
                    <div className={"p-2 w-1/2"}>
                        <p className="text-sm text-gray-600">Số dư chờ nhận</p>
                        <p className="text-lg font-semibold text-rose-600">0 đ</p>
                    </div>
                </div>
            </div>
            <div className="text-center" onClick={handleTopup}>
                <button className="bg-cyan-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                    transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white">
                    Nạp tiền vào ví
                </button>
            </div>
        </div>
    )
}


function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
}

// Ví dụ sử dụng
const amount = 99000020457;
const formattedAmount = formatCurrency(amount);

const PersonalInfoForm = () => {
    const user = {
        name: "NGUYỄN ANH TUẤN",
        email: "tuanmeo980provip@gmail.com",
        typeAccount: "Tài khoản cá nhân",
        isVerify: true,
        surplus: amount,
    };

    return (
        <div>
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
                <div>
                    <div className="bg-[url('/backgroundLogin.png')] bg-cover">
                        <div className="max-w-lg mx-auto shadow-md backdrop-blur-sm rounded-lg overflow-hidden">
                            <div className="px-6 py-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-white text-3xl font-bold mb-2">Thông tin cá nhân</h2>
                                </div>
                                <div className="flex items-center text-red-400 hover:text-green-400">
                                    <FaEdit size={20} className="cursor-pointer mr-2"/>
                                    <span className="cursor-pointer">Sửa</span>
                                </div>
                            </div>
                            <div className="flex items-center px-6 py-4">
                                <MdAccountCircle size={70}
                                                 className="text-white text-lg hover:text-green-400 cursor-pointer mr-4"/>
                                <div>
                                    <p className="text-white text-lg font-semibold">{user.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-green-500 font-semibold mr-2">{user.isVerify ? "Tài khoản đã chứng thực" : "Tài khoản chưa chứng thực"}</p>
                                        <HiMiniCheckBadge size={20} className="text-blue-700"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-1 p-6">
                        <div className="mb-2">
                            <label className="block text-gray-700 text-base font-extralight mb-0.5">
                                Loại tài khoản
                            </label>
                            <p className="text-gray-900 font-semibold">{user.typeAccount}</p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-base font-extralight mb-0.5">
                                Email đăng nhập
                            </label>
                            <p className="text-gray-900 font-semibold">{user.email}</p>
                        </div>
                    </div>
                </div>
                <MyWallet/>
            </div>
            <Footer/>
        </div>
    );
};

export default PersonalInfoForm;
export { MyWallet }
