import React, { useState } from 'react';
import {Bounce, toast, ToastContainer} from "react-toastify";
import {ScrollRestoration} from "react-router-dom";

const OtpVerification = () => {
    const [otp, setOtp] = useState('');
    const [resendTime, setResendTime] = useState(20);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic xác thực OTP tại đây
        notify('Xác thực thành công!', 'success');
    };

    const handleResendOtp = () => {
        // Gửi lại OTP
        setResendTime(20);
        // Đoạn mã gửi lại OTP ở đây
        notify('Đã gửi lại OTP!', 'info');
    };

    // Đếm ngược thời gian gửi lại OTP
    React.useEffect(() => {
        if (resendTime > 0) {
            const timer = setInterval(() => {
                setResendTime(resendTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [resendTime]);

    const notify = (message, type) => {
        toast[type](message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
        });
    };

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-6">
                    <div className="flex flex-col items-center">
                        <img src="otp_veri.png" alt="OTP Verification" className="w-24 mb-4"/>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Xác thực OTP</h2>
                        <p className="text-gray-600 text-center">Nhập mã OTP được gửi đến số điện thoại:</p>
                        <div className="font-semibold text-lg text-gray-800 mb-4">0397374117</div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nhập mã OTP"
                            required
                        />
                        <div className="flex justify-between items-center gap-6">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-200 hover:text-red-600"
                            >
                                Hủy
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        {resendTime > 0 ? (
                            <p className="text-gray-600">
                                Mã OTP hết hiệu lực sau: <span className="font-medium text-red-600">{resendTime}s</span>
                            </p>
                        ) : (
                            <button onClick={handleResendOtp} className="text-blue-500 hover:underline">
                                Gửi lại OTP
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <ScrollRestoration/>
            <ToastContainer stacked/>
        </div>
    );
};

export default OtpVerification;