import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import TransactionTable from "./TransactionTable.jsx";

const transactions = [
    {
        transactionCode: "138262548",
        billCode: "NT12345",
        transactionType: "NẠP TIỀN",
        amount: 50000,
        createdTime: "18:44:51 13/07/2024",
        status: "Thành công",
        receiverAccount: "tuanmeo980provip@gmail.com"
    },
    {
        transactionCode: "138096951",
        billCode: "CT12345",
        transactionType: "CHUYỂN TIỀN",
        amount: -100000,
        createdTime: "22:18:43 07/07/2024",
        status: "Thất bại",
        receiverAccount: "tuanmeo980provip@gmail.com"
    },
    {
        transactionCode: "138096943",
        billCode: "RT12345",
        transactionType: "RÚT TIỀN",
        amount: -10000,
        createdTime: "22:18:30 07/07/2024",
        status: "Đang xử lý",
        receiverAccount: "tuanmeo980provip@gmail.com"
    }
    ,
    {
        transactionCode: "138096943",
        billCode: "TT12345",
        transactionType: "THANH TOÁN",
        amount: -10000,
        createdTime: "22:18:30 07/07/2024",
        status: "Thành công",
        receiverAccount: "tuanmeo980provip@gmail.com"
    }
    ,
    {
        transactionCode: "138096943",
        billCode: "NT12345",
        transactionType: "NHẬN TIỀN",
        amount: 10000,
        createdTime: "22:18:30 07/07/2024",
        status: "Thành công",
        receiverAccount: "tuanmeo980provip@gmail.com"
    }
];

const TransactionHistory = () => {
    const [filter, setFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [transactionTypeFilter, setTransactionTypeFilter] = useState("");

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize(); // Set initial value on mount

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Hàm lọc các giao dịch dựa trên bộ lọc
    const filterTransactions = (transactions, filter) => {
        return transactions.filter(transaction => {
            // Áp dụng bộ lọc theo trạng thái
            if (statusFilter !== "") {
                if (transaction.status !== statusFilter) {
                    return false;
                }
            }
            // Áp dụng bộ lọc theo loại giao dịch
            if (transactionTypeFilter !== "") {
                if (transaction.transactionType !== transactionTypeFilter) {
                    return false;
                }
            }
            // Áp dụng bộ lọc theo thời gian
            if (startDate && endDate) {
                const [dayStart, monthStart, yearStart] = startDate.split("/");
                const [dayEnd, monthEnd, yearEnd] = endDate.split("/");
                const transactionDate = new Date(transaction.createdTime);
                const startFilterDate = new Date(`${yearStart}-${monthStart}-${dayStart}`);
                const endFilterDate = new Date(`${yearEnd}-${monthEnd}-${dayEnd}`);
                if (transactionDate < startFilterDate || transactionDate > endFilterDate) {
                    return false;
                }
            }
            return true;
        });
    };

    // Xử lý thay đổi bộ lọc trạng thái
    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    // Xử lý thay đổi thời gian bắt đầu
    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    // Xử lý thay đổi thời gian kết thúc
    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    // Xử lý chọn loại giao dịch để lọc
    const handleTransactionTypeFilter = (type) => {
        setTransactionTypeFilter(type);
    };
    //Tạo Thành Phần Button:
    const FilterButton = ({ label, filterValue, currentFilter, onClick }) => {
        const isActive = currentFilter === filterValue;
        const buttonClass = `px-4 py-2 rounded border-1 hover:bg-green-300 ${isActive ? 'bg-green-500 text-white' : 'bg-slate-100'}`;
        return (
            <button className={buttonClass} onClick={() => onClick(filterValue)}>
                {label}
            </button>
        );
    };

    const clearFilters = () => {
        setStatusFilter("");
        setStartDate("");
        setEndDate("");
    };

    // Lấy các giao dịch đã lọc
    const filteredTransactions = filterTransactions(transactions, filter);

    return (
        <div className={"mb-4"}>
            <div className="flex flex-col items-center min-h-screen">
                <div>
                    <h2 className="text-3xl font-semibold text-center text-gray-700 p-2">
                        Lịch Sử Giao Dịch
                    </h2>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-6xl">
                    <div className="mb-4 flex items-center">
                        <input
                            type="text"
                            placeholder="Tìm giao dịch"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full"
                        />
                        <button className="ml-2 px-4 py-2 bg-gray-200 rounded">
                            <CiSearch/>
                        </button>
                    </div>
                    <div className={isMobile ? "mb-4" : "flex flex-col md:flex-row justify-between mb-4"}>
                        {!isMobile ? (
                            <div className="flex space-x-2">
                                <FilterButton
                                    label="TẤT CẢ"
                                    filterValue=""
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                                <FilterButton
                                    label="THANH TOÁN"
                                    filterValue="THANH TOÁN"
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                                <FilterButton
                                    label="NẠP TIỀN"
                                    filterValue="NẠP TIỀN"
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                                <FilterButton
                                    label="RÚT TIỀN"
                                    filterValue="RÚT TIỀN"
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                                <FilterButton
                                    label="CHUYỂN TIỀN"
                                    filterValue="CHUYỂN TIỀN"
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                                <FilterButton
                                    label="NHẬN TIỀN"
                                    filterValue="NHẬN TIỀN"
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                                <FilterButton
                                    label="HOÀN TIỀN"
                                    filterValue="HOÀN TIỀN"
                                    currentFilter={transactionTypeFilter}
                                    onClick={handleTransactionTypeFilter}
                                />
                            </div>
                        ) : (
                            <select
                                className="px-4 py-2 border rounded w-full"
                                onChange={(e) => setFilter(e.target.value)}
                                value={filter}
                            >
                                <option value="">Chọn loại giao dịch</option>
                                <option value="all">TẤT CẢ</option>
                                <option value="payment">THANH TOÁN</option>
                                <option value="deposit">NẠP TIỀN</option>
                                <option value="withdraw">RÚT TIỀN</option>
                                <option value="transfer">CHUYỂN TIỀN</option>
                                <option value="refund">HOÀN TIỀN</option>
                            </select>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex">
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex items-center mr-4">Lọc Theo:</div>
                                <div className={"flex items-center max-w-full mr-4"}>
                                    <select
                                        className="px-4 py-[7px] border rounded"
                                        value={statusFilter}
                                        onChange={handleStatusFilterChange}
                                    >
                                        <option value="">Tất cả trạng thái</option>
                                        <option value="Thành công">Thành công</option>
                                        <option value="Đang xử lý">Đang xử lý</option>
                                        <option value="Đã hoàn tiền">Đã hoàn tiền</option>
                                        <option value="Thất bại">Thất bại</option>
                                    </select>
                                </div>
                                <div className="flex flex-col tm:flex-row">
                                    <div className={"flex items-center mr-2"}>Thời gian:</div>
                                    <div className="flex items-center flex-col ssm:flex-row gap-2">
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={handleStartDateChange}
                                            className="px-3 py-2 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        />
                                        <div>
                                            <label className={"mr-2"}>Đến:</label>
                                            <input
                                                type="date"
                                                value={endDate}
                                                onChange={handleEndDateChange}
                                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer text-blue-500 hover:text-red-600" onClick={clearFilters}>
                            Xóa Bộ Lọc
                        </div>
                    </div>

                    <div className="mb-4 flex flex-col sm:flex-row gap-1 mt-3">
                        <p>Có {filteredTransactions.length} giao dịch.</p>
                        <div>
                            Tổng Tiền GD: 2,620,000 đ
                        </div>
                    </div>
                    {/*truyền props*/}
                    {filteredTransactions.length === 0 ? (
                        <NotFound/>
                    ) : (
                        <TransactionTable transactions={filteredTransactions} />
                    )}
                </div>
            </div>
        </div>
    );
};
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center border-2">
            <div className="text-center">
                <img src="/notfound.png" alt="Not Found" className="max-w-full h-auto mx-auto mb-4"/>
                <p className="text-lg font-semibold text-gray-500">Không tìm thấy kết quả!</p>
            </div>
        </div>
    );
}

export default TransactionHistory;