import {BsFillMenuButtonWideFill} from "react-icons/bs";
import {FaChartLine, FaDownload, FaUpload} from "react-icons/fa";
import {MdOutlinePayments} from "react-icons/md";
import {HiOutlineViewGridAdd} from "react-icons/hi";
import {ScrollRestoration, useNavigate} from "react-router-dom";
import PersonalInfoForm from "../infoAccount/PersonalInfoForm.jsx";
import {PiHandWithdrawBold} from "react-icons/pi";
import { FaBook } from "react-icons/fa";

const Card = ({icon, title, onClick}) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            <div className="p-8 flex flex-col items-center">
                {icon}
                <h2 className="text-xl font-semibold mt-4">{title}</h2>
            </div>
        </div>
    );
};

const HomePage = () => {
    const navigate = useNavigate();

    const handleTopup = (e) => {
        e.preventDefault();
        navigate('/topup');
    };
    const handleQRPayent = (e) => {
        e.preventDefault();
        navigate('/qrpayment');
    };
    const handleservicePayent = (e) => {
        e.preventDefault();
        navigate('/servicepayment');
    };
    const handleTranHistory = (e) => {
        e.preventDefault();
        navigate('/transactions');
    };

    return (
        <div className={"flex flex-col bg-gray-100"}>
            <div className={"flex justify-center items-center "}>
                <div className={"flex flex-col md-[1000px]:flex-row"}>
                    <div className={"order-first md:order-last md:ml-9"}>
                        <PersonalInfoForm/>
                    </div>
                    <div className="min-h-screen flex flex-col md:ml-9">
                        <div className="flex items-center justify-between p-4 w-full bg-white">
                            <div className="flex items-center">
                                <BsFillMenuButtonWideFill size={25} className="text-gray-800"/>
                                <h1 className="text-2xl font-bold ml-3">Tiện ích</h1>
                            </div>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="max-w-5xl mx-auto">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {/* Card components */}
                                    <Card icon={<FaDownload size={30} className={"text-green-500"}/>} title="Nạp tiền"
                                          onClick={handleTopup}/> {/* Sửa onclick thành onClick */}
                                    <Card icon={<FaUpload size={30} className={"text-green-500"}/>} title="Chuyển tiền" onClick={handleTopup}/>
                                    <Card icon={<PiHandWithdrawBold size={30} className={"text-green-500"}/>} title="Rút tiền" onClick={handleTopup}/>
                                    <Card icon={<MdOutlinePayments size={30} className={"text-green-500"}/>} title="QR Thanh toán" onClick={handleQRPayent}/>
                                    <Card icon={<FaChartLine size={30} className={"text-green-500"}/>} title="Biến động số dư" onClick={handleTopup}/>
                                    <Card icon={<FaBook size={30} className={"text-green-500"}/>} title="Lịch sử giao dịch" onClick={handleTranHistory}/>
                                    <Card icon={<HiOutlineViewGridAdd size={30} className={"text-green-500"}/>} title="Xem thêm dịch vụ"
                                          onClick={handleservicePayent}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollRestoration/>
        </div>
    );
};

export default HomePage;