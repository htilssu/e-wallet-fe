import { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

// eslint-disable-next-line react/prop-types
const Bdsd = ({ onFilter }) => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = () => {
        const currentYear = new Date().getFullYear();
        const monthInt = parseInt(month, 10);
        const yearInt = parseInt(year, 10);

        if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
            return;
        }

        if (isNaN(yearInt) || yearInt > currentYear) {
            return;
        }

        // Simulate fetching filtered data (replace with actual API call)
        const filteredRecords = [
            { date: '01', startingBalance: '1000000', totalDeposits: '500000', numDepositTransactions: '2', totalWithdrawals: '200000', numWithdrawalTransactions: '1', endingBalance: '1300000' },
            { date: '02', startingBalance: '1300000', totalDeposits: '600000', numDepositTransactions: '3', totalWithdrawals: '250000', numWithdrawalTransactions: '2', endingBalance: '1600000' }
            // Add more records as needed
        ];

        setFilteredData(filteredRecords);
    };

    const handleClearFilters = () => {
        setMonth('');
        setYear('');
        setFilteredData([]);
        onFilter('', ''); // Assuming your filter function clears all filters when passed empty strings
    };

    const renderFinancialData = () => {
        return filteredData.map((record, index) => (
            <div key={index} className="flex flex-row md:grid md:grid-cols-7 gap-2 p-2 space-x-1">
                <div>{`${record.date}/${month}`}</div>
                <div>{record.startingBalance}</div>
                <div>{record.totalDeposits}</div>
                <div>{record.numDepositTransactions}</div>
                <div>{record.totalWithdrawals}</div>
                <div>{record.numWithdrawalTransactions}</div>
                <div>{record.endingBalance}</div>
            </div>
        ));
    };

    const renderMonthOptions = () => {
        return Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
                {month}
            </option>
        ));
    };

    const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: 10 }, (_, i) => currentYear - i).map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
        ));
    };

    return (
        <div className="w-full md:w-full md:p-6 flex items-center justify-center">
            <div className="w-full max-w-full my-auto mx-0 p-5 bg-white border-0 md:border-[1px] border-solid border-amber-500 rounded-3xl">
                <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex items-center flex-col sm:flex-row space-x-4">
                        <div className="flex w-auto items-center">
                            <p className="text-sm">Lọc theo:</p>
                        </div>
                        <div className={"w-full"}>
                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className="h-full w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Chọn tháng</option>
                                {renderMonthOptions()}
                            </select>
                        </div>
                        <div className={"w-full mt-5 md:mt-0"}>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="h-full w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Chọn năm</option>
                                {renderYearOptions()}
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={handleFilter}
                            className="h-full mt-3 md:mt-0 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:w-auto"
                        >
                            Lọc
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl hover:cursor-pointer text-red-400">
                            <TiDeleteOutline onClick={handleClearFilters} />
                        </div>
                        <div className="text-gray-500">
                            <span className={"hover: cursor-pointer"} onClick={handleClearFilters}>Xóa bộ lọc </span>
                        </div>
                        <button className="h-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:w-auto">
                            Xuất Excel
                        </button>
                    </div>
                </div>
                {filteredData.length > 0 ? (
                    <div className="mt-5">
                        <div className="grid grid-cols-7 gap-2 bg-gray-100 p-2 space-x-1">
                            <div className="font-semibold">Ngày</div>
                            <div className="font-semibold">Số dư đầu kỳ (VND)</div>
                            <div className="font-semibold">Tổng nạp (VND)</div>
                            <div className="font-semibold">Số GD nạp</div>
                            <div className="font-semibold">Tổng rút (VND)</div>
                            <div className="font-semibold">Số GD rút</div>
                            <div className="font-semibold">Số dư cuối kỳ (VND)</div>
                        </div>
                        {renderFinancialData()}
                    </div>
                ) : (
                    <div className="mt-5 text-gray-500">Không có kết quả.</div>
                )}
            </div>
        </div>
    );
};

export default Bdsd;
