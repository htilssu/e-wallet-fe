import { useState } from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";
import { Checkbox } from "rsuite";
import { ScrollRestoration, useNavigate } from "react-router-dom";

const user = {
    name: "NGUYỄN ANH TUẤN",
    email: "tuanmeo980provip@gmail.com",
    surplus: '',
};

const toUser = {
    name: "NGUYỄN TRUNG QUỐC",
    email: "tuanmodel911@gmail.com",
    isVerify: true,
};

const TransferMoney = () => {
    const [amount, setAmount] = useState(0);
    const [fee, setFee] = useState(0);
    const [total, setTotal] = useState(0);
    const [recipientEmail, setRecipientEmail] = useState('');
    const [transferMethod, setTransferMethod] = useState('Chuyển ngay');
    const [feeBearer, setFeeBearer] = useState('Người nhận');
    const [content, setContent] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const suggestedAmounts = [20000, 50000, 100000, 200000, 500000, 1000000];

    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        setAmount(Number(value));
        calculateTotal(Number(value), fee);
    };

    const handleSuggestedAmountClick = (val) => {
        setAmount(val);
        calculateTotal(val, fee);
    };

    const calculateTotal = (amount, fee) => {
        setTotal(amount + fee);
    };

    // Chuyển trang
    const navigate = useNavigate();
    const handleOTPverify = () => {
        navigate('success');
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-9">
            <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-blue-400 text-white rounded-t-lg">
                <h2 className="text-3xl font-bold ml-3">Chuyển Tiền</h2>
            </div>
            <div>
                <form className="p-4 md:p-6">
                    {/* Số tiền cần chuyển */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="amount">
                            Số tiền cần chuyển
                        </label>
                        <input
                            type="text"
                            id="amount"
                            placeholder="Số tiền tối thiểu phải lớn hơn 2.000 VND"
                            value={amount ? amount.toLocaleString() : ''}
                            onChange={handleAmountChange}
                            className="placeholder:text-lg w-full text-2xl px-3 py-2 text-red-700 font-sans border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Số tiền gợi ý */}
                    <div className="mb-6">
                        <p className="text-gray-700 text-md font-bold mb-2">Số tiền gợi ý:</p>
                        <div className="grid grid-cols-3 gap-4">
                            {suggestedAmounts.map((val) => (
                                <button
                                    key={val}
                                    type="button"
                                    onClick={() => handleSuggestedAmountClick(val)}
                                    className="h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:shadow-outline transition duration-300"
                                >
                                    {val.toLocaleString()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Email người nhận */}
                    <div className="mb-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="recipientEmail">
                                Email người nhận:
                            </label>
                            <input
                                type="email"
                                id="recipientEmail"
                                placeholder="Nhập email người nhận"
                                value={recipientEmail}
                                onChange={(e) => setRecipientEmail(e.target.value)}
                                className="placeholder:text-lg w-full text-md px-3 py-2 text-gray-700 font-sans border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="block text-gray-700 text-md font-semibold">
                                Tên người nhận:
                            </div>
                            <div className="flex items-center">
                                {toUser.name}
                                {toUser.isVerify && <HiMiniCheckBadge size={22} className="text-blue-600 ml-2"/>}
                            </div>
                        </div>
                    </div>

                    {/* Hình thức chuyển */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Hình thức chuyển:
                        </label>
                        <select
                            value={transferMethod}
                            onChange={(e) => setTransferMethod(e.target.value)}
                            className="placeholder:text-lg w-full text-md px-3 py-2 text-gray-700 font-sans border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            <option value="Chuyển ngay">Chuyển ngay</option>
                            <option value="Sau 10 phút">Chuyển sau 10 phút</option>
                            <option value="Sau 1 giờ">Chuyển sau 1 giờ</option>
                        </select>
                    </div>

                    {/* Người chịu phí */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Người chịu phí:
                        </label>
                        <div className="flex items-center">
                            <label className="mr-4 text-md">
                                <input
                                    type="radio"
                                    name="feeBearer"
                                    value="Người nhận"
                                    checked={feeBearer === 'Người nhận'}
                                    onChange={(e) => setFeeBearer(e.target.value)}
                                    className="mr-2"
                                />
                                Người nhận
                            </label>
                            <label className="text-md">
                                <input
                                    type="radio"
                                    name="feeBearer"
                                    value="Người chuyển"
                                    checked={feeBearer === 'Người chuyển'}
                                    onChange={(e) => setFeeBearer(e.target.value)}
                                    className="mr-2"
                                />
                                Người chuyển
                            </label>
                        </div>
                    </div>

                    {/* Nội dung */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="content">
                            Nội dung:
                        </label>
                        <textarea
                            id="content"
                            placeholder="Nhập nội dung chuyển tiền"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="placeholder:text-lg w-full text-lg px-3 py-2 text-gray-700 font-sans border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Phí chuyển tiền và tổng số tiền */}
                    <div className="mb-2 border-t-2 border-gray-300 pt-4">
                        <p className="text-red-500 text-md font-semibold mb-2">Phí chuyển
                            tiền: {fee.toLocaleString()} đ</p>
                        <p className="text-gray-700 text-lg font-semibold mb-2">Tổng số
                            tiền: {total.toLocaleString()} đ</p>
                    </div>

                    {/* Xác thực thông tin */}
                    <div className="mb-4 p-6 bg-gray-100 rounded-lg shadow-lg">
                        <label className="block text-gray-700 text-xl font-semibold mb-2">
                            Xác thực thông tin
                        </label>
                        <div className="flex flex-col gap-3 rounded-lg">
                            <div className="text-md text-gray-600">
                                Tích vào ô vuông để xác thực
                            </div>
                            <div className="flex items-center gap-4 p-2 border-2 border-gray-300 rounded-lg bg-white">
                                <label className="flex items-center text-md text-gray-700">
                                    <Checkbox
                                        color="primary"
                                        size="medium"
                                        value={isVerified}
                                        onChange={(e) => setIsVerified(e.target.checked)}
                                    />
                                    Tôi không phải là người máy
                                </label>
                                <FaRobot size={40} className="text-green-500 ml-auto"/>
                            </div>
                        </div>
                    </div>

                    {/* Nút Tiếp tục */}
                    <button
                        type="button"
                        disabled={!amount || !recipientEmail}
                        className={`w-full py-3 px-4 rounded-lg text-white font-bold text-lg' ${!amount || !recipientEmail ? 'bg-green-200 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-green-500'}`}
                        onClick={handleOTPverify}
                    >
                        Tiếp tục
                    </button>
                </form>
            </div>
            <ScrollRestoration/>
        </div>
    );
};

export default TransferMoney;
