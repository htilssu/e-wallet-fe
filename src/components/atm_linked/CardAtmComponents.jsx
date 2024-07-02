
import { IoIosAddCircle } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const CardAtmComponents = ({ title, text, link }) => {
    return (

        <div className="cart card-atm  w-full bg-white  md:w-2/5 text-sm whitespace-nowrap h-[150px] p-3 mt-4 bg-white border-[2px] border-dashed border-gray rounded-3xl flex flex-col	justify-center items-center hover:bg-amber-300 transition duration-300 ease-in-out ">
            <div className="card-body">
                <a href={link}>
                    <div className="card-icon text-3xl text-[#FF7F50FF] flex justify-center items-center">
                        <IoIosAddCircle />
                    </div>
                    <h5 className="card-title flex justify-center text-[16px] text-[#FF7F50FF]">{title}</h5>
                    <p className="card-text text-sm md:text-sm text-[#FF7F50FF]">{text}</p>
                </a>

        </div>
        </div>
    );
};

export default CardAtmComponents;
