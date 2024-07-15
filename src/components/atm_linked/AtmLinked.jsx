// src/components/AtmLinked.js
import { useNavigate } from 'react-router-dom';
import { GrTransaction } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import CardAtmComponents from './CardAtmComponents'; // Import the CardAtmComponents component
import Card from "./Card.jsx";

const AtmLinked = () => {
    const navigate = useNavigate();

    const handleShowNganHang = (event) => {
        event.preventDefault();
        navigate('/AddInfoAtm'); // Điều hướng đến trang AddInfoAtm
    };

    // Sample data for ATM cards
    const atmCards = [
        { cardNumber: '13213213213213221', cardHolder: 'Út Tún',expiryDate: '12/12' , bankName: 'VietTinBank' },
        { cardNumber: '9876543210987654',cardHolder: 'Lam vu',expiryDate: '12/12' , bankName: 'ACB Bank'}
        // Add more cards as needed
    ];

    return (
        <div className="md:p-6 flex items-center justify-center">
            <div className="form-box w-full max-w-[900px] my-auto mx-0 p-5 bg-white border-0 md:border-[1px] border-solid border-amber-500 rounded-3xl">
                <form>
                    {/* Form Header */}
                    <div className="head-form flex items-center mb-5">
                        <div className="icons mr-2 text-[#FF7F50FF]">
                            <GrTransaction />
                        </div>
                        <div className="head-title">
                            <p>Thẻ/Tài khoản ngân hàng</p>
                        </div>
                    </div>

                    {/* Form Body */}
                    <div className="body-title mb-2 font-semibold flex items-start border-b-[1px] border-black">
                        <p>Thẻ/tài khoản nội địa(rút)</p>
                    </div>
                    <div className="body-section">
                        {/* Body Section Header */}
                        <div className="body-section-head flex justify-between items-center pb-2 mb-2">
                            <div className="body-section-head-left flex items-center relative">
                                <p>THẺ ATM</p>
                            </div>
                            <div className="body-section-head-right flex items-center relative">
                                <div className="icon-body-head text-[#FF7F50FF] text-sm" onClick={handleShowNganHang}>
                                    <IoIosAddCircle />
                                </div>
                                <div className="body-section-head-right-p ml-1 flex items-center text-[#FF7F50FF]" onClick={handleShowNganHang}>
                                    <p>Thẻ ATM</p>
                                </div>
                            </div>
                        </div>

                        {/* Cards Container */}
                        <div className="atm-container grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Render ATM cards dynamically */}
                            {atmCards.map((card, index) => (
                                <Card
                                    key={index}
                                    cardNumber={card.cardNumber}
                                    cardHolder={card.cardHolder}
                                    expiryDate={card.expiryDate}
                                    bankName={card.bankName}
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
                            <div className="body-section-bottom-left flex items-center relative">
                                <p>TÀI KHOẢN NGÂN HÀNG</p>
                            </div>
                            <div className="body-section-bottom-right flex items-center relative">
                                <div className="icon-body-bottom relative text-[#FF7F50FF] text-sm" onClick={handleShowNganHang}>
                                    <IoIosAddCircle />
                                </div>
                                <div className="body-section-bottom-right-p flex items-center text-[#FF7F50FF]" onClick={handleShowNganHang}>
                                    <p>Thẻ tài khoản</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="nganhang md:w-1/2">
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
