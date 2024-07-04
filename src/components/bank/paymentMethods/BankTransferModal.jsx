
import { useLocation } from 'react-router-dom';

const BankTransferModal = () => {
    const location = useLocation();
    const bank = location.state?.bank;

    return (
        <div>
            <div className="flex justify-center items-center mb-20">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-2xl">
                    <div className="text-gray-950 p-6">
                        <h2 className="text-2xl font-bold mb-4">Chuyển khoản nhận ngay</h2>
                        {bank ? (
                            <div>
                                <p className="mb-4">Bạn đã chọn ngân hàng: {bank.name}</p>
                                <p className="mb-4">
                                    Vui lòng chuyển khoản Online LUÔN & NGAY cho NgânLượng.vn bằng 1 trong 2 phương tiện
                                    dưới đây để hoàn tất giao dịch thanh toán:
                                </p>
                                <div className="flex items-center mb-4">
                                    <img src="path_to_mobile_app_image" alt="Mobile App" className="w-12 h-12 mr-4"/>
                                    <p>PHƯƠNG THỨC 1: Mở ứng dụng (Mobile App) Mobile Banking trên điện thoại</p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <img src="path_to_internet_banking_image" alt="Internet Banking"
                                         className="w-12 h-12 mr-4"/>
                                    <p>PHƯƠNG THỨC 2: Đăng nhập vào Website Internet Banking của ngân hàng</p>
                                </div>
                                <p className="mb-4">
                                    Bạn hãy copy chính xác số tài khoản, nội dung chuyển khoản để Ngân Lượng ghi nhận
                                    giao dịch chính xác và nhanh nhất.
                                </p>
                                <div className="border p-4 rounded-lg mb-4">
                                    <h3 className="text-xl font-semibold mb-2">CHUYỂN KHOẢN NHẬN NGAY 24/7</h3>
                                    <p>Email: tuanmeo980provip@gmail.com</p>
                                    <p>Số tài khoản: 9686686660000000001</p>
                                    <p>Tên chủ tài khoản: Công ty CP công trung gian thanh toán Ngân Lượng</p>
                                    <p>Ngân hàng: MSB - Ngân hàng TMCP Hàng Hải Việt Nam</p>
                                    <p>Chi nhánh: CN Hà Nội</p>
                                    <p>Số tiền: 100.000 (một trăm ngàn) đồng</p>
                                    <p>Nội dung: NL43145206TF</p>
                                </div>
                                <div className="text-center mb-4">
                                    <img src="path_to_qr_code_image" alt="QR Code" className="mx-auto"/>
                                    <p className="text-sm">Lưu ý: Mã QRcode trên chỉ sử dụng 1 lần</p>
                                </div>
                                <p className="text-red-500 font-bold text-center mb-4">Giao dịch đang được xử lý</p>
                                <p className="text-center">
                                    Ngay khi nhận xác thực thành công từ phía Ngân hàng, chúng tôi sẽ gửi thông báo tới
                                    bạn!
                                </p>
                            </div>
                        ) : (
                            <p>Không có thông tin ngân hàng được chọn.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankTransferModal;
