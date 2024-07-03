import {useState} from "react";

const banks = [
    {
        name: "Vietcombank",
        note: "Vietcombank - Ngoại thương",
        logo: "/logoVCB.png"
    },
    {
        name: "Vietinbank",
        note: "Vietinbank - Công thương",
        logo: "/logoVTB.png"
    },
    {
        name: "DongABank",
        note: "DongA Bank - Đông Á",
        logo: "/logoDongABank.png"
    },
    {
        name: "Techcombank",
        note: "Techcombank - Kỹ Thương Việt Nam",
        logo: "/logoTCB.png"
    },
    {
        name: "Vietinbank",
        note: "Vietinbank - Công thương",
        logo: "/logoVTB.png"
    },
    {
        name: "Eximbank",
        note: "Eximbank - Xuất nhập khẩu",
        logo: "/logoVCB.png"
    },
    {
        name: "ACB",
        note: "ACB - Á Châu",
        logo: "/logoVCB.png"
    },
    {
        name: "Sacombank",
        note: "Sacombank - Sài Gòn Thương Tín",
        logo: "/logoVCB.png"
    },
    {
        name: "BIDV",
        note: "BIDV - Đầu tư",
        logo: "/logoVCB.png"
    }
    ,
    {
        name: "Vietinbank",
        note: "Vietinbank - Công thương",
        logo: "/logoVTB.png"
    }
    ,
    {
        name: "Vietinbank",
        note: "Vietinbank - Công thương",
        logo: "/logoVTB.png"
    }
];

// eslint-disable-next-line react/prop-types
const BankSelectModal = ({ show, onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");

    if (!show) return null;

    const handleBankSelect = (bank) => {
        alert(`Bạn đã chọn ngân hàng: ${bank.name}`);
        onClose();
    };
    // Hàm xử lý thay đổi từ khóa tìm kiếm
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Lọc danh sách banks dựa trên từ khóa tìm kiếm
    const filteredBanks = banks.filter((bank) =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-40">
            <div className="bg-gray-100 border-2 rounded-lg overflow-hidden shadow-xl w-full max-w-lg">
                <div className="text-gray-950 p-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Chọn ngân hàng</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                placeholder="Bạn chuyển tiền từ thẻ/tài khoản ngân hàng nào?"
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full"
                            />
                        </div>
                    </div>
                    {/* Danh sách ngân hàng */}
                    <div className="h-[400px] overflow-y-auto border-2 ">
                        <div className="grid grid-cols-1 gap-4">
                            {filteredBanks.map((bank) => (
                                <div
                                    key={bank.name}
                                    onClick={() => handleBankSelect(bank)}
                                    className="border-2 border-b-cyan-800 flex items-center w-full py-2 px-4 bg-white text-slate-950 rounded-lg hover:bg-green-200 focus:outline-none focus:shadow-outline transition duration-300 cursor-pointer"
                                >
                                    <img src={bank.logo} alt={bank.name} className="w-[85px] max-h-full mr-4"/>
                                    <div className="text-left">
                                        <p className="font-bold">{bank.name}</p>
                                        <p className="text-sm">{bank.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-100 text-right">
                    <button
                        onClick={onClose}
                        className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline transition duration-300"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BankSelectModal;