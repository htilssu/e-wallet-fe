import { useNavigate } from 'react-router-dom';
import { GrTransaction } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import CardAtmComponents from './CardAtmComponents'; // Import the CardAtmComponents component
import Card from "./Card.jsx";
import {useEffect, useState} from "react";
import {get} from "../../util/requestUtil.js";
import {toast} from "react-toastify";

const AtmLinked = () => {
    const navigate = useNavigate();
    const [bankInfo, setBankInfo] = useState()
    const handleShowNganHang = (event) => {
        event.preventDefault();
        navigate('/AddInfoAtm'); // Navigate to AddInfoAtm page
    };

    // Sample data for ATM cards
    useEffect(() => {
        get("/api/v1/card")
            .then((res) => {
                console.log('API response:', res); // Log toàn bộ response để kiểm tra
                if (res.data && Array.isArray(res.data)) {
                    setBankInfo(res.data);
                } else {
                    console.error('Dữ liệu trả về không đúng định dạng:', res.data);
                    toast.error('Dữ liệu trả về không đúng định dạng!');
                }
            })
            .catch((error) => {
                console.error('Lỗi khi lấy thông tin thẻ:', error);
                toast.error('Lỗi khi lấy thông tin thẻ!');
            });
    }, []);
    const handleDelete = (cardNumber) => {
        del(`/api/v1/card/${cardNumber}`).then(() => {
            setBankInfo(prev => prev.filter(card => card.cardNumber !== cardNumber));
            toast.success('Thẻ đã được xóa thành công!');
        }).catch(() => {
            toast.error('Lỗi khi xóa thẻ!');
        });
    };


    return (
        <div className="md:p-6 flex items-center justify-center">
            <div className="form-box w-full max-w-[900px] my-auto mx-0 p-5 bg-white border-0 md:border-[1px] border-solid border-green-500 rounded-3xl">
                <form>
                    {/* Form Header */}
                    <div className="head-form flex items-center mb-5">
                        <div className="icons mr-2 text-green-500">
                            <GrTransaction />
                        </div>
                        <div className="head-title text-green-500">
                            <p>Thẻ/Tài khoản ngân hàng</p>
                        </div>
                    </div>

                    {/* Form Body */}
                    <div className="body-title mb-2 font-semibold text-green-500 flex items-start border-b-[1px] border-black">
                        <p>Thẻ/tài khoản nội địa(rút)</p>
                    </div>
                    <div className="body-section">
                        {/* Body Section Header */}
                        <div className="body-section-head flex justify-between items-center pb-2 mb-2">
                            <div className="body-section-head-left flex items-center relative text-green-500">
                                <p>THẺ ATM</p>
                            </div>
                            <div className="body-section-head-right flex items-center relative">
                                <div className="icon-body-head text-green-500 text-sm" onClick={handleShowNganHang}>
                                    <IoIosAddCircle />
                                </div>
                                <div className="body-section-head-right-p ml-1 flex items-center text-green-500" onClick={handleShowNganHang}>
                                    <p>Thẻ ATM</p>
                                </div>
                            </div>
                        </div>

                        {/* Cards Container */}
                        <div className="atm-container grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Render ATM cards dynamically */}
                            {bankInfo && bankInfo.map((card, index) => (
                                <Card
                                    key={index}
                                   cardNumber={card.cardNumber}
                                    expiryDate={card.expired}
                                    cardHolder={card.holderName}
                                />
                            ))}

                            <CardAtmComponents
                                title="Thêm thẻ ATM"
                                text="Bạn có thể thêm thẻ ATM vào đây"
                                link="#"
                                onClick={handleShowNganHang}
                            />
                        </div>
                        <div className="body-section-bottom flex justify-between items-center pb-2 mt-4">
                            <div className="body-section-bottom-left text-green-500 flex items-center relative">
                                <p>TÀI KHOẢN NGÂN HÀNG</p>
                            </div>
                            <div className="body-section-bottom-right flex items-center relative">
                                <div className="icon-body-bottom relative text-green-500 text-sm" onClick={handleShowNganHang}>
                                    <IoIosAddCircle />
                                </div>
                                <div className="body-section-bottom-right-p flex items-center text-green-500" onClick={handleShowNganHang}>
                                    <p>Thẻ tài khoản</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="nganhang w-full md:w-1/2 mt-2">
                            <CardAtmComponents
                                title="Thêm tài khoản ngân hàng"
                                text="Bạn có thể thêm tài khoản ngân hàng vào đây"
                                link="#"
                                onClick={handleShowNganHang}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AtmLinked;
