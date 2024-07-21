import { useState } from "react";

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

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-9">
            <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-blue-400 text-white rounded-t-lg">
                <h2 className="text-2xl font-bold ml-3">Chuyển Tiền</h2>
            </div>
            <form className="mt-2 p-3">
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
                        className="placeholder:text-lg w-full text-2xl px-3 py-2 text-red-700 font-sans ring-1 hover:ring-emerald-500 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <p className="text-gray-700 text-md font-bold mb-2">Số tiền gợi ý:</p>
                    <div className="grid grid-cols-3 gap-4">
                        {suggestedAmounts.map((val) => (
                            <button
                                key={val}
                                type="button"
                                onClick={() => handleSuggestedAmountClick(val)}
                                className="h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 hover:bg-gradient-to-r focus:outline-none focus:shadow-outline transition duration-300"
                            >
                                {val.toLocaleString()}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="recipientEmail">
                        Email người nhận:
                    </label>
                    <input
                        type="email"
                        id="recipientEmail"
                        placeholder="Nhập email người nhận"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="placeholder:text-lg w-full text-md px-3 py-2 text-gray-700 font-sans ring-1 hover:ring-emerald-500 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Hình thức chuyển:
                    </label>
                    <select
                        value={transferMethod}
                        onChange={(e) => setTransferMethod(e.target.value)}
                        className="placeholder:text-lg w-full text-md px-3 py-2 text-gray-700 font-sans ring-1 hover:ring-emerald-500 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        <option value="Chuyển ngay">Chuyển ngay</option>
                        <option value="Sau 10 phút">Chuyển sau 10 phút</option>
                        <option value="Sau 1 giờ">Chuyển sau 1 giờ</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Người chịu phí:
                    </label>
                    <div className="flex">
                        <label className="mr-4 text-md">
                            <input
                                type="radio"
                                name="feeBearer"
                                value="Người nhận"
                                checked={feeBearer === 'Người nhận'}
                                onChange={(e) => setFeeBearer(e.target.value)}
                                className="mr-2 "
                            />
                            Người nhận
                        </label>
                        <label className={"text-md"}>
                            <input
                                type="radio"
                                name="feeBearer"
                                value="Người chuyển"
                                checked={feeBearer === 'Người chuyển'}
                                onChange={(e) => setFeeBearer(e.target.value)}
                                className="mr-2 "
                            />
                            Người chuyển
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Nội dung:
                    </label>
                    <textarea
                        id="content"
                        placeholder="Nhập nội dung chuyển tiền"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="placeholder:text-lg w-full text-lg px-3 py-2 text-gray-700 font-sans ring-1 hover:ring-emerald-500 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <p className="text-gray-700 text-md font-bold mb-2">Phí chuyển tiền: {fee.toLocaleString()} đ</p>
                    <p className="text-gray-700 text-lg font-bold mb-2">Tổng tiền: {total.toLocaleString()} đ</p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Xác thực thông tin
                    </label>
                    <label className="flex items-center text-md">
                        <input
                            type="checkbox"
                            checked={isVerified}
                            onChange={(e) => setIsVerified(e.target.checked)}
                            className="mr-2"
                        />
                        Tích vào ô vuông để xác thực
                    </label>
                </div>
                <button
                    type="button"
                    disabled={!isVerified || !amount || !recipientEmail}
                    className={`w-full py-2 px-4 rounded-lg text-white font-bold text-lg ${!isVerified || !amount || !recipientEmail ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:shadow-outline transition duration-300'}`}
                >
                    Tiếp tục
                </button>
            </form>
        </div>
    );
};

export default TransferMoney;