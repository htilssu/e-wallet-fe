import { FaDownload, FaUpload, FaBook } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { PiHandWithdrawBold } from "react-icons/pi";

// Mảng các mục cho thanh điều hướng
const navbarItems = [
    {
        link: "/topup",
        icon: <FaDownload size={30} className="text-green-500" />,
        title: "Nạp tiền"
    },
    {
        link: "/transfermoney",
        icon: <FaUpload size={30} className="text-green-500" />,
        title: "Chuyển tiền"
    },
    {
        link: "/withdraw",
        icon: <PiHandWithdrawBold size={30} className="text-green-500" />,
        title: "Rút tiền"
    },
    {
        link: "/qrpayment",
        icon: <MdOutlinePayments size={30} className="text-green-500" />,
        title: "QR Thanh toán"
    },

    {
        link: "/transactions",
        icon: <FaBook size={30} className="text-green-500" />,
        title: "Lịch sử giao dịch"
    },
    {
        link: "/servicepayment",
        icon: <HiOutlineViewGridAdd size={30} className="text-green-500" />,
        title: "Xem thêm dịch vụ"
    }
];

export default navbarItems;