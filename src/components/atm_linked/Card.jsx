const Card = ({ cardNumber, cardHolder, expiryDate, bankName }) => {
    return (
        <div className="w-full md:w-[400px] h-auto bg-green-500 rounded-xl shadow-md overflow-hidden p-5 relative">
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
        </div>
    );
};

export default Card;
