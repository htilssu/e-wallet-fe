import { FaCreditCard, FaExchangeAlt, FaUndoAlt, FaDownload, FaUpload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const transactionIcons = {
    "NẠP TIỀN": <FaDownload />,
    "RÚT TIỀN": <FaUpload />,
    "THANH TOÁN": <FaCreditCard/>,
    "CHUYỂN TIỀN": <FaExchangeAlt />,
    "NHẬN TIỀN": <FaDownload />,
    "HOÀN TIỀN": <FaUndoAlt />,
};

const statusColor = {
    "Thành công": "text-green-500",
    "Đang xử lý": "text-yellow-500",
    "Thất bại": "text-red-500",
    "Đã hủy": "text-red-500",
};

const TransactionDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { transaction } = location.state;

    return (
        <div className="p-2 bg-gray-100 mb-10">
            <div className="flex items-center mb-2 cursor-pointer text-blue-600" onClick={() => navigate(-1)}>
                <IoArrowBackSharp size={24} />
                <span className="ml-2">Quay lại</span>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <div className="text-2xl text-green-500">
                        {transactionIcons[transaction.transactionType]}
                    </div>
                    <p className="text-xl font-semibold ml-2">{transaction.transactionType}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold">{transaction.amount.toLocaleString()} VND</p>
                    <p className={`text-lg font-semibold ${statusColor[transaction.status]}`}>{transaction.status}</p>
                </div>
                <div className="border-t-2 pt-4">
                    <div className="mb-2">
                        <p className="font-semibold">Mã giao dịch:</p>
                        <p>{transaction.transactionCode}</p>
                    </div>
                    <div className="mb-2">
                        <p className="font-semibold">Mã hoá đơn:</p>
                        <p>{transaction.billCode}</p>
                    </div>
                    <div className="mb-2">
                        <p className="font-semibold">Thời gian tạo:</p>
                        <p>{transaction.createdTime}</p>
                    </div>
                    <div className="mb-2">
                        <p className="font-semibold">Tài khoản nhận:</p>
                        <p>{transaction.receiverAccount}</p>
                    </div>
                    <div className="mb-2">
                        <p className="font-semibold">Nội dung:</p>
                        <p>{transaction.description || "Không có nội dung"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionDetail;