import { useState, useEffect } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { ScrollRestoration } from 'react-router-dom';
import { PinInput } from '@mantine/core';
import {post} from "../../util/requestUtil.js";

const user = {
    email: 'tuan980blue@gmail.com',
};

const OtpVerification = () => {
    const [otp, setOtp] = useState('');
    const [resendTime, setResendTime] = useState(10);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //debug
        console.log({otp});

        if (otp.length === 0 || otp.length < 6) {
            setError('Vui lòng nhập đầy đủ OTP!');
            return;
        }

        try {
            post("/api/v1/otp", {
                otp: otp
            }).then((res => {
                notify('Xác thực thành công!', 'success');
                setError(null);
            })).catch((e) => {
                notify('Đã xảy ra lỗi!', 'error');
                setError('Đã xảy ra lỗi!');
            })

        } catch (error) {
            notify('Đã xảy ra lỗi trong quá trình xác thực OTP!', 'error');
            setError('Đã xảy ra lỗi trong quá trình xác thực OTP!');
        }
    };

    const handleChange = (value) => {
        setOtp(value);
        setError(null);
    };

    const handleResendOtp = async () => {
        setOtp('');
        setResendTime(10);
        setError(null);

        try {
            //Xử lý sau
        } catch (error) {
            notify('Đã xảy ra lỗi trong quá trình gửi lại OTP!', 'error');
        }
    };

    useEffect(() => {
        if (resendTime > 0) {
            const timer = setInterval(() => {
                setResendTime((prevResendTime) => prevResendTime - 1);
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
                        <img src="otp_veri.png" alt="OTP Verification" className="w-24 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Xác thực OTP</h2>
                        <p className="text-gray-600 text-center">Nhập mã OTP được gửi đến Email:</p>
                        <div className="font-medium text-md text-gray-800 mb-4">{user.email}</div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col justify-center items-center">
                            <PinInput
                                length={6} type ={/^[0-9]*$/} inPutType="tel" inPutMode="numeric"
                                value={otp}
                                onChange={handleChange}
                            />
                            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                        </div>

                        <div className="flex justify-between items-center gap-6">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="w-1/2 px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-200 hover:text-red-600"
                            >
                                Hủy
                            </button>
                            <button
                                type="submit"
                                className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2"
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
            <ScrollRestoration />
            <ToastContainer stacked />
        </div>
    );
};

export default OtpVerification;