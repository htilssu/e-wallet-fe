import './atm_linked.css'; // Import file CSS để tùy chỉnh giao diện
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { GrTransaction } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";

const AtmLinked = () => {
    return (
        <div className="form-box">
            <form>
                {/* Phần đầu form */}
                <div className="head-form">
                    <div className="icons">
                        <GrTransaction />
                    </div>
                    <div className="head-title">
                        <p>Thẻ/Tài khoản ngân hàng</p>
                    </div>
                </div>

                {/* Phần thân form */}
                <div className="body-title">
                    <p>Thẻ/tài khoản nội địa(rút)</p>
                </div>
                <div className="body-section">
                    {/* Phần đầu của phần thân */}
                    <div className="body-section-head">
                        <div className="body-section-head-left">
                            <p>Thẻ ATM</p>
                        </div>
                        <div className="body-section-head-right">
                            <div className="icon-body-head">
                                <IoIosAddCircle/>
                            </div>
                            <div className="body-section-head-right-p">
                                <p>THẺ ATM</p>
                            </div>
                        </div>
                    </div>

                    {/* Card thứ nhất */}
                    <div className="atm">
                        <div className="cart card-atm">
                            <div className="card-body">
                                <a href='#'>
                                    <div className="card-icon">
                                        <IoIosAddCircle/>
                                    </div>
                                    <h5 className="card-title">Thêm thẻ ATM</h5>
                                    <p className="card-text">Bạn có thể thêm thẻ ATM vào đây</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="body-section-bottom">
                        <div className="body-section-bottom-left">
                            <p>TÀI KHOẢN NGÂN HÀNG</p>
                        </div>
                        <div className="body-section-bottom-right">
                            <div className="icon-body-bottom">
                                <IoIosAddCircle/>
                            </div>
                            <div className="body-section-bottom-right-p">
                                <p>Thẻ tài khoản</p>
                            </div>
                        </div>
                    </div>
                    <div className="nganhang">
                        {/* Card thứ hai */}
                        <div className="cart card-nganhang">
                            <div className="card-body-nganhang">
                                <a href='#'>
                                    <div className="card-icon-nganhang">
                                        <IoIosAddCircle/>
                                    </div>
                                    <h5 className="card-title">Thêm tài khoản ngân hàng</h5>
                                    <p className="card-text">Bạn có thể tài khoản ngân hàng vào đây</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AtmLinked;
