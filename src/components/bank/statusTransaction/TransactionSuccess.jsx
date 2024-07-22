import { FaCheckCircle } from "react-icons/fa";
import {ScrollRestoration, useNavigate} from "react-router-dom";

const TransactionSuccess = () => {
    //chuyen trang
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    };
    return (
        <div className="min-h-screen flex  justify-center bg-gray-100 p-4">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex flex-col justify-center items-center mb-6">
                    <FaCheckCircle size={60} className="text-green-500 mb-4"/>
                    <h1 className="text-xl font-bold text-center text-green-500 md:text-3xl">Chuyển tiền thành công</h1>
                </div>
                <div className="space-y-4 border-2 border-gray-200 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Mã giao dịch:</span>
                        <span className="text-gray-900">138479314</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Thời gian tạo:</span>
                        <span className="text-gray-900">02:12 22/07/2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Phương thức:</span>
                        <span className="text-gray-900">Chuyển ngay</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Phí chuyển tiền:</span>
                        <span className="text-gray-900">Miễn Phí</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Số tiền:</span>
                        <span className="text-red-500">2,000,000 đ</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Người nhận:</span>
                        <span className="text-gray-900">TRầN TRUNG HIếU</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Nội dung:</span>
                        <span className="text-gray-900">Chuyển tiền cafe</span>
                    </div>
                </div>
                <div className="mt-6 flex flex-grow space-x-4">
                    <button
                        className="flex-1 bg-blue-500 text-white py-3 rounded-lg text-md md:text-lg font-semibold hover:bg-blue-600 transition duration-200"
                        onClick={() => navigate(-1)}>
                        Chuyển tiếp
                    </button>
                    <button
                        className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg text-md md:text-lg font-semibold hover:bg-gray-400 transition duration-200"
                        onClick={handleHome}>
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
            <ScrollRestoration/>
        </div>
    );
};

export default TransactionSuccess;