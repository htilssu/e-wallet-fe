import { MdRemoveRedEye } from "react-icons/md";
import {FaCreditCard, FaExchangeAlt, FaUndoAlt, FaDownload, FaUpload} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const transactionIcons = {
    "NẠP TIỀN": <FaDownload />,
    "RÚT TIỀN": <FaUpload />,
    "THANH TOÁN": <FaCreditCard />,
    "CHUYỂN TIỀN": <FaExchangeAlt />,
    "NHẬN TIỀN": <FaDownload />,
    "HOÀN TIỀN": <FaUndoAlt />,
};
const statusColor = {
    "Thành công": "text-green-500",
    "Đang xử lý": "text-yellow-500",
    "Thất bại": "text-red-500",
    "Đã hủy": "text-red-500",
    // thêm các trạng thái khác nếu cần
};

const TransactionTable = ({ transactions }) => {
    const navigate = useNavigate();

    //truyền thông tin giao dịch qua navigate
    const handleSelectTran = (transaction) => {
        navigate('transactiondetail', { state: { transaction } });
    };
    return (
        <>
            <div className="hidden lg:block">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 uppercase text-black text-center">
                    <tr>
                        <th className="py-4">Mã giao dịch</th>
                        <th className="py-4">Mã hoá đơn</th>
                        <th className="py-4">Loại giao dịch</th>
                        <th className="py-4">Số tiền</th>
                        <th className="py-4">Thời gian tạo</th>
                        <th className="py-4">Trạng thái</th>
                        <th className="py-4">Tài khoản nhận</th>
                        <th className="py-4">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="border-2 border-gray-200 hover:bg-gray-100 text-center">
                            <td className="py-6">{transaction.transactionCode}</td>
                            <td className="py-6">{transaction.billCode}</td>
                            <td className="py-6 flex items-center gap-2">
                                <div className="text-xl text-green-500">
                                    {transactionIcons[transaction.transactionType]}
                                </div>
                                {transaction.transactionType}
                            </td>
                            <td className="py-6">{transaction.amount.toLocaleString()} VND</td>
                            <td className="py-6">{transaction.createdTime}</td>
                            <td className={`py-6 ${statusColor[transaction.status]}`}>{transaction.status}</td>
                            <td className="py-6">{transaction.receiverAccount}</td>
                            <td className="py-6 font-semibold text-gray-700 hover:text-blue-600 cursor-pointer flex justify-center"
                                onClick={() => handleSelectTran(transaction)}>
                                <MdRemoveRedEye size={25}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="block lg:hidden">
                {transactions.map((transaction, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50">
                        <div className="flex items-center justify-between">
                            <div className={"flex flex-col"}>
                                <p className="font-semibold flex items-center gap-2">{transactionIcons[transaction.transactionType]} {transaction.transactionType}</p>
                                <p className="text-green-500">{transaction.amount.toLocaleString()} VND</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p><strong>Mã giao dịch: </strong> {transaction.transactionCode}</p>
                            <p><strong>Mã hoá đơn:</strong> {transaction.billCode}</p>
                            <p>{transaction.status}</p>
                            <p><strong>Chuyển đến: </strong> {transaction.receiverAccount}</p>
                            <button className="mt-1 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => handleSelectTran(transaction)}>
                                    Xem Chi tiết
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TransactionTable;