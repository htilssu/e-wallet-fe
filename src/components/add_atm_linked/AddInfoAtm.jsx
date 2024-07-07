import { useEffect, useState } from "react";
import axios from "axios";

const fetchBankList = () => {
  return axios.get("https://api.vietqr.io/v2/banks");
};

const AddInfoAtm = () => {
    const [selectedBank, setSelectedBank] = useState('');
    const [bankList, setBankList] = useState([]);
    const accountName = 'Út Tún';
    const [accountNumber, setAccountNumber] = useState('');
    const [ngayphathanh, setNgayphathanh] = useState('');
    const [previousNgayphathanh, setPreviousNgayphathanh] = useState('');
    const [errors, setErrors] = useState({
        accountNumber: '',
        ngayphathanh: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchBankList()
            .then(result => {
                setBankList(result.data.data);
            })
            .catch(error => {
                console.error('Error fetching bank list:', error);
            });
    }, []);

    const selectBank = (shortName) => {
        setSelectedBank(shortName);
    };

    const validateDate = (date) => {
        const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
        if (!regex.test(date)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                ngayphathanh: 'Ngày phát hành không hợp lệ. Vui lòng nhập lại.'
            }));
            return false;
        }

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        const [month, year] = date.split('/').map(Number);
        if (month < 1 || month > 12) {
            setErrors(prevErrors => ({
                ...prevErrors,
                ngayphathanh: 'Tháng không hợp lệ. Vui lòng nhập lại.'
            }));
            return false;
        }
        if (year > currentYear || (year === currentYear && month > currentMonth)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                ngayphathanh: 'Năm không hợp lệ hoặc vượt quá thời gian hiện tại. Vui lòng nhập lại.'
            }));
            return false;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            ngayphathanh: ''
        }));
        return true;
    };

    const handleDateChange = (e) => {
        let value = e.target.value;
        if (value.length === 2 && !value.includes('/')) {
            value = value + '/';
        }
        if (value.length > 7) {
            value = value.slice(0, 7);
        }

        setPreviousNgayphathanh(ngayphathanh);
        setNgayphathanh(value);

        if (value.length === 7 || value.length === 2) {
            validateDate(value);
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                ngayphathanh: ''
            }));
        }
    };

    const handleValidation = () => {
        let formIsValid = true;
        const newErrors = {
            accountNumber: '',
            ngayphathanh: ''
        };

        if (!accountNumber) {
            newErrors.accountNumber = 'Vui lòng nhập số tài khoản';
            formIsValid = false;
        }

        if (!ngayphathanh || !validateDate(ngayphathanh)) {
            newErrors.ngayphathanh = 'Vui lòng nhập ngày phát hành';
            formIsValid = false;
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            console.log('Form is valid');
            setSuccessMessage('Thông tin đã được cập nhật thành công.');
        }
    };

    return (
        <div className={"md:p-6 flex items-center justify-center"}>
            <div className="Add-app flex flex-wrap justify-center items-center max-w-[1200px] w-full bg-white border-[1px] mt-5 p-8 rounded-2xl">
                <div className="w-full md:flex " >
                    <div className="w-full md:w-1/2 justify-center p-4 bg-gray-100 border border-gray-300 rounded-2xl mb-5 md:mb-0 h-full">
                        <div className="mb-4">
                            <p className="text-lg">{accountName}</p>
                        </div>
                        <div className="mb-4">
                            <p className="stk font-medium text-gray-700">Số tài khoản:</p>
                            <p className="text-lg">{accountNumber}</p>
                        </div>
                        <div className="mb-5">
                            <p className="nganhang font-medium text-gray-700">Ngân hàng:</p>
                            <p className="text-lg">{selectedBank}</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-medium text-gray-700">Ngày phát hành:</p>
                            <p className="text-lg">{ngayphathanh}</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 p-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center">
                                <span className="w-1/4 text-right mr-4 text-md">Chọn ngân hàng:</span>
                                <select
                                    className="w-3/4 p-2 border border-gray-300 focus:outline-none"
                                    value={selectedBank}
                                    onChange={(e) => selectBank(e.target.value)}
                                >
                                    <option value="" disabled selected hidden>Chọn ngân hàng</option>
                                    {bankList.map((bank, index) => (
                                        <option key={index} value={bank.shortName}>
                                            {bank.shortName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center">
                                <span className="w-1/4 text-right mr-4 text-md">Tên tài khoản:</span>
                                <input
                                    className="w-3/4 p-2 border border-gray-300 bg-gray-300 text-gray-700 focus:outline-none"
                                    value={accountName}
                                    readOnly
                                />
                            </div>
                            <div className="flex items-center flex-col">
                                <div className="flex  w-full mb-4 items-baseline">
                                    <div className="w-1/4 text-right mr-4 text-md items-baseline ">
                                        <span>Số thẻ:</span>
                                    </div>
                                    <div className="w-3/4">
                                        <div className="relative">
                                            <input
                                                className="w-full p-2 border border-gray-300 focus:outline-none align-baseline"
                                                type="text"
                                                value={accountNumber}
                                                onChange={(e) => setAccountNumber(e.target.value)}
                                            />
                                            {errors.accountNumber && (
                                                <p className="text-red-500 mt-1 left-0">{errors.accountNumber}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center flex-col border-b-2 border-gray-300 pb-6">
                                <div className="flex items-ceter w-full mb-4 items-baseline ">
                                    <div className="w-1/4 textn-right mr-4 text-md ">
                                        <span>Ngày phát hành thẻ:</span>
                                    </div>
                                    <div className="w-3/4 ">
                                        <div className="">
                                            <input
                                                className="w-full p-2 border border-gray-300 focus:outline-none"
                                                type="text"
                                                placeholder="mm/yyyy"
                                                value={ngayphathanh}
                                                onChange={handleDateChange}
                                            />

                                            {errors.ngayphathanh && (
                                                <p className="text-red-500 mt-1">{errors.ngayphathanh}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="button-bottom flex justify-end">
                                <button
                                    className="button-update text-amber-500 p-3 rounded-2xl mr-3 font-bold bg-white"
                                    onClick={() => {
                                        setAccountNumber('');
                                        setNgayphathanh(previousNgayphathanh); // Khôi phục giá trị trước đó
                                        setSelectedBank('');
                                        setErrors({});
                                        setSuccessMessage('');
                                    }}
                                >
                                    Hủy bỏ
                                </button>
                                <button className="button-update p-3 rounded-2xl bg-orange-500 font-bold text-white"
                                        onClick={handleSubmit}>Cập nhật
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {successMessage && <p className="text-green-500">{successMessage}</p>}
            </div>
        </div>
    );
};

export default AddInfoAtm;
