import {FaDownload} from "react-icons/fa";

import {useState} from "react";

const InfoPopup = () => {
    const [amount, setAmount] = useState('');
    const [displayAmount, setDisplayAmount] = useState('');
    const [method, setMethod] = useState('');

    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Xóa ký tự không phải là số
        const numericValue = value.replace(/[^0-9]/g, '');
        setAmount(numericValue);
        setDisplayAmount(numericValue);
    };

    const handleAmountBlur = () => {
        if (amount) {
            const formattedAmount = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(amount);
            setDisplayAmount(formattedAmount);
        }
    };

    const handleMethodChange = (method) => {
        setMethod(method);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Số tiền: ${displayAmount}, Phương thức: ${method}`);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-8">
            <div className="flex items-center mb-6">
                <FaDownload size={25} className="text-black"/>
                <h2 className="text-red-800 text-4xl font-bold ml-3">Nạp tiền</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        SỐ TIỀN CẦN NẠP
                    </label>
                    <input
                        type="text"
                        id="amount"
                        placeholder="Số tiền tối thiểu phải lớn hơn 10.000 VND"
                        value={displayAmount}
                        onChange={handleAmountChange}
                        onBlur={handleAmountBlur}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <p className="text-gray-700 text-sm font-bold mb-2">Số tiền đề xuất:</p>
                    <div className="grid grid-cols-3 gap-4">
                        {[20000, 50000, 100000, 200000, 500000, 1000000].map((val) => (
                            <button
                                key={val}
                                type="button"
                                onClick={() => {
                                    const formattedAmount = new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(val);
                                    setAmount(val.toString());
                                    setDisplayAmount(formattedAmount);
                                }}
                                className="h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 hover:bg-gradient-to-r focus:outline-none focus:shadow-outline transition duration-300"
                            >
                                {val.toLocaleString()}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        CHỌN PHƯƠNG THỨC NẠP
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {label: 'Online bằng thẻ ATM', minAmount: 10000},
                            {label: 'Online bằng Internet banking', minAmount: 10000},
                            {label: 'Chuyển khoản nhận ngay', minAmount: 50000},
                            {label: 'Chuyển khoản offline', minAmount: 10000},
                            {label: 'Online bằng thẻ liên kết', minAmount: 10000, fee: '0,33%'}
                        ].map(({label, minAmount, fee}) => (
                            <div
                                key={label}
                                onClick={() => handleMethodChange(label)}
                                className={`p-4 rounded-lg border ${method === label ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-100 hover:bg-green-500'} cursor-pointer`}
                            >
                                <p className={`font-semibold ${method === label ? 'text-blue-500' : 'text-gray-700'}`}>{label}</p>
                                <p className="text-sm text-gray-500">Tối
                                    thiểu: {minAmount.toLocaleString()}đ {fee && ` - Phí: ${fee}`}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline"
                    >
                        Nạp tiền vào ví
                    </button>
                </div>
            </form>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                <p className="font-bold">Thông báo:</p>
                <p>Đối với các hình thức nạp tiền/thanh toán offline (chuyển khoản qua I-banking, ATM), chính sách của
                    một số Ngân hàng sẽ không hỗ trợ kiểm tra sau 19h00: Agribank, Đông Á, Sacombank, Vietinbank,
                    Vietcombank.</p>
            </div>
        </div>
    );
};

export default InfoPopup;