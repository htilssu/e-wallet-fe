
import 'react-toastify/dist/ReactToastify.css';
import {ScrollRestoration, useNavigate} from "react-router-dom";
import {post} from "../../../util/requestUtil.js";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

const ServicePayment = () => {
    const paymentInf = {
        transactionName: "Mua hàng online",
        partnerCode: "PNC111111",
        amount: 5000000,
        promotionCode: "VC1111111",
        promotion: 50000,
        transactionCode: "HD123456",
    };
    const user = {
        name: "NGUYỄN ANH TUẤN",
        email: "tuanmeo980provip@gmail.com",
    };

    //chuyen trang
    const navigate = useNavigate();
    const handleOTPverify = () => {
        navigate('/otpverification');
    };
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Bắt đầu loading

        try {
            post("/api/v1/otp", {
                otpType: 'email',
                sendTo: user.email
            }).then((res) => {
                toast.success(res.data.message);
                setError(null);
                setLoading(false);
                handleOTPverify();
            }).catch((e) => {
                toast.error('Đã xảy ra lỗi!');
                setError('Đã xảy ra lỗi! Vui lòng thử lại.');
                setLoading(false);
            });
        } catch (error) {
            toast.error('Đã xảy ra lỗi trong quá trình gửi OTP!', 'error');
            setError('Đã xảy ra lỗi trong quá trình gửi OTP!');
            setLoading(false);
        }
    };

    const totalAmount = paymentInf.amount - paymentInf.promotion;

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-4 pb-12 rounded-lg shadow-xl w-full max-w-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                        Chi Tiết Thanh Toán
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-800 font-medium">Tên dịch vụ</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.transactionName}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium">Mã Đối Tác</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.partnerCode}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium">Số Tiền Thanh Toán</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50 text-green-500">
                                {paymentInf.amount.toLocaleString()} VND
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium">Mã Khuyến Mãi</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.promotionCode}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium">Khuyến Mãi</label>
                            <div
                                className="text-red-500 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.promotion.toLocaleString()} VND
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium">Mã Giao Dịch</label>
                            <div
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-gray-50">
                                {paymentInf.transactionCode}
                            </div>
                        </div>
                        <div className={"flex flex-grow items-center gap-4 justify-between"}>
                            <label className="text-gray-800 font-semibold text-lg">Tổng Số Tiền:</label>
                            <div
                                className="font-semibold text-lg text-green-600">
                                {totalAmount.toLocaleString()} VND
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-full p-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
                                disabled={loading} // Disable button when loading
                            >
                                {loading ? 'Đang gửi OTP...' : 'Xác Nhận Thanh Toán'}
                            </button>
                        </div>
                        {error && (
                            <div className="text-red-500 text-center mt-4">
                                {error}
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <ToastContainer stacked />
            <ScrollRestoration/>
        </>
    );
};

export default ServicePayment;