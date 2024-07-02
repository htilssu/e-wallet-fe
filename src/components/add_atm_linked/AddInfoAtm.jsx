import { useState, useEffect, useRef } from 'react';
import './test.css'; // Import CSS file
import axios from 'axios';

const AddInfoAtm = () => {
    const [showBankList, setShowBankList] = useState(false);
    const [selectedBank, setSelectedBank] = useState('');
    const [bankList, setBankList] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {

        // Function to fetch data from API
        const fetchBankList = async () => {
            try {
                const response = await axios.get('https://api.vietqr.io/v2/banks')
                setBankList(response.data.data);
            } catch (error) {
                console.error('Error fetching bank list:', error);
            }
        };

        fetchBankList();
    }, []);

    const list = () => {
        setShowBankList(!showBankList);
    };

    const selectBank = (shortName) => {
        setSelectedBank(shortName);
        setShowBankList(false); // Hide bank list after selecting
    };

    // Handle click outside to close the bank list
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowBankList(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="Add-app flex w-full max-w-[1200px]">
            <div className="card w-full">
                <div className="form-card ">
                    <p>title</p>
                    <div>ten</div>
                    <div>stk</div>
                    <div>so ngan hang</div>
                </div>
            </div>
            <div className="bank-container w-full items-center justify-center  ">
                <div className="pick flex mb-10 ">
                    <p className="pick-p mr-10 items-center justify-center content-center text-lg">chọn ngân hàng:</p>
                    <div className="input-container " >
                        <input
                            className="list border-[1px]"
                            placeholder={selectedBank ? selectedBank : "Chọn ngân hàng"}
                            onClick={list}
                            readOnly
                        />
                        {showBankList && (
                            <div className="bank-list">
                                {bankList.map((bank, index) => (
                                    <input
                                        key={index}
                                        type="button"
                                        className="bank-item"
                                        value={bank.shortName}
                                        onClick={() => selectBank(bank.shortName)}

                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="ten-tk flex ">
                    <p className="ten-tai-khoan-p mr-10">Tên tài khoản</p>
                    <div className="ten-tai-khoan-input">
                        <input className="ten-tk-input" placeholder="Ho Le Anh Toan"/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default AddInfoAtm;
