// eslint-disable-next-line react/prop-types
const Card = ({ sothe, tentaikhoan, nganhang, }) => {


    return (
        <div className="w-full md:flex " >
            <div className="w-full bg-emerald-400 md:w-2/3 text-sm whitespace-nowrap h-[150px] p-3 mt-4  border-[2px]  border-gray rounded-3xl flex flex-col justify-center items-center transition duration-300 ease-in-out">
                <div className="mb-4">
                </div>
                <div className="mb-4">
                    <p className="stk font-medium text-gray-700">{nganhang}</p>
                </div>
                <div className="mb-5">
                    <p className="nganhang font-medium text-gray-700">{tentaikhoan}</p>
                </div>
                <div className="mb-5">
                    <p className="font-medium text-gray-700">{sothe}</p>

                </div>
            </div>
        </div>
    );
};

export default Card;
