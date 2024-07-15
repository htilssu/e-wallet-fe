
import 'react-toastify/dist/ReactToastify.css';
import {ScrollRestoration, useNavigate} from "react-router-dom";

const ServicePayment = () => {
    const paymentInf = {
        transactionName: "Mua hàng online",
        partnerCode: "PNC111111",
        amount: 5000000,
        promotionCode: "VC1111111",
        promotion: 50000,
        transactionCode: "HD123456",
    };
    //chuyen trang
    const navigate = useNavigate();

    const handleOTPverify = () => {
        navigate('/otpverification');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOTPverify();
    };

    const totalAmount = paymentInf.amount - paymentInf.promotion;

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-4 pb-12 rounded-lg shadow-xl w-full max-w-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">
                        Chi Tiết Thanh Toán
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium">Tên dịch vụ</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.transactionName}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Mã Đối Tác</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.partnerCode}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Số Tiền Thanh Toán</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.amount.toLocaleString()} VND
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Mã Khuyến Mãi</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.promotionCode}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Khuyến Mãi</label>
                            <div
                                className="text-red-500 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.promotion.toLocaleString()} VND
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Mã Giao Dịch</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.transactionCode}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-extrabold">Tổng Số Tiền</label>
                            <div
                                className="font-semibold mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {totalAmount.toLocaleString()} VND
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-full bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
                            >
                                Xác Nhận Thanh Toán
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ScrollRestoration/>
        </>
    );
};

export default ServicePayment;