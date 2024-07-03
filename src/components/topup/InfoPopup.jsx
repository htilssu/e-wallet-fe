import {FaDownload} from "react-icons/fa";

import {useState} from "react";

const InfoPopup = () => {
    const [amount, setAmount] = useState('');
    const [displayAmount, setDisplayAmount] = useState('');
    const [method, setMethod] = useState('');
    // amount: Lưu trữ giá trị số tiền nhập vào từ người dùng (dạng chuỗi).
    // displayAmount: Lưu trữ giá trị số tiền dạng đã định dạng để hiển thị cho người dùng.
    // method: Lưu trữ phương thức thanh toán được chọn.

    const handleAmountChange = (e) => {
        const value = e.target.value;  //Lấy giá trị người dùng nhập vào.
        // Xóa ký tự không phải là số
        const numericValue = value.replace(/[^0-9]/g, '');
        setAmount(numericValue);  //Cập nhật state amount với giá trị số đã được xử lý.
        setDisplayAmount(numericValue);  // Cập nhật state displayAmount để hiển thị giá trị số tiền mới nhập vào mà không cần định dạng.
    };

    const handleAmountBlur = () => {
        if (amount) {  //Kiểm tra nếu amount không rỗng, thực hiện định dạng số tiền theo định dạng tiền tệ Việt Nam (vi-VN) và lưu vào formattedAmount.
            const formattedAmount = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(amount);
            setDisplayAmount(formattedAmount);  //Cập nhật state displayAmount để hiển thị số tiền đã được định dạng.
        }
    };

    //Hàm này được gọi khi người dùng chọn một phương thức thanh toán khác nhau.
    const handleMethodChange = (method) => {
        setMethod(method);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Số tiền: ${displayAmount}, Phương thức: ${method}`);
    };

    const suggestedAmounts = [20000, 50000, 100000, 200000, 500000, 1000000];
    const paymentMethods = [
        { label: 'Online bằng thẻ ATM', minAmount: 10000 },
        { label: 'Online bằng Internet banking', minAmount: 10000 },
        { label: 'Chuyển khoản nhận ngay', minAmount: 50000 },
        { label: 'Chuyển khoản offline', minAmount: 10000 },
        { label: 'Online bằng thẻ liên kết', minAmount: 10000, fee: '0,33%' }
    ];

    return (
        <div className="max-w-2xl bg-white shadow-md rounded-lg overflow-hidden p-8 mb-9">
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
                        className="placeholder:text-lg w-full text-2xl px-3 py-2 text-red-700 font-sans ring-green-700 ring-1 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <p className="text-gray-700 text-sm font-bold mb-2">Số tiền đề xuất:</p>
                    <div className="grid grid-cols-3 gap-4">
                        {suggestedAmounts.map((val) => (
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
                        {paymentMethods.map(({label, minAmount, fee}) => (
                            <div
                                key={label}
                                onClick={() => handleMethodChange(label)}
                                className={`p-4 rounded-lg border ${method === label ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-100 hover:bg-blue-300'} cursor-pointer`}
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