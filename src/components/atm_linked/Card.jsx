import { useState } from "react";
import { FaTrash } from 'react-icons/fa';

const Card = ({ cardNumber, cardHolder, expiryDate, bankName }) => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleDelete = () => {
        onDelete(cardNumber); // Gọi hàm onDelete với cardNumber
    };
    return (
        <div
            className="w-full md:w-[400px] h-auto bg-[url('/src/assets/ava.png')] rounded-xl shadow-md overflow-hidden p-5 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="text-white text-center text-xl font-semibold mb-2">{bankName}</div>
            <div className="flex flex-col items-center">
                <div className="w-full h-24 rounded-xl flex items-center justify-center mb-2 relative bg-opacity-50">
                    <img src={"/src/assets/chip.png"} alt="Chip" className="absolute top-2 left-4 w-10" />
                    <div className="text-white text-xl font-mono mt-5">{cardNumber}</div>
                </div>
                <div className="w-full flex justify-between text-white mt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-black">Expiry Date</span>
                        <span className="text-sm font-semibold">{expiryDate}</span>
                        <span className="text-sm font-semibold">{cardHolder}</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-2 right-2">
                <img src={"/src/assets/Mastercard.png"} alt="MasterCard" className="w-12" />
            </div>
            {hover && (
                <div
                    className="absolute top-2 right-2 cursor-pointer text-white"
                    onClick={handleDelete}
                >
                    <FaTrash />
                </div>
            )}
        </div>
    );
};

export default Card;
