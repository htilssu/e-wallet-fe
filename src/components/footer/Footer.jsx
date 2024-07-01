import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-white">
                        <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
                        <p>Email: contact@example.com</p>
                        <p>Điện thoại: +84 123 456 789</p>
                        <p>Địa chỉ: Số 123 Đường ABC, Quận XYZ, TP HCM</p>
                    </div>
                    <div className="text-white">
                        <h3 className="text-lg font-semibold mb-2">Theo dõi chúng tôi</h3>
                        <div className="flex">
                            <a href="#facebook" className="text-gray-400 hover:text-white mx-2">
                                <i className="fab fa-facebook fa-lg">
                                    <FaFacebook/>
                                </i>
                            </a>
                            <a href="#twitter" className="text-gray-400 hover:text-white mx-2">
                                <i className="fab fa-twitter fa-lg">
                                    <FaTwitter/>
                                </i>
                            </a>
                            <a href="#linkedin" className="text-gray-400 hover:text-white mx-2">
                                <i className="fab fa-linkedin fa-lg">
                                    <FaLinkedin/>
                                </i>
                            </a>
                            <a href="#instagram" className="text-gray-400 hover:text-white mx-2">
                                <i className="fab fa-instagram fa-lg">
                                    <FaInstagram/>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-400 text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
            <div className="bg-amber-200">
                Chao cac ban
            </div>
        </footer>
    );
}

export default Footer;
