import { FaUserPlus } from "react-icons/fa6"; //user-sup-icon
import { FaAngleRight } from "react-icons/fa6"; //right-icon
import Switch from "react-switch"; //switch icon
import { FaUserCircle } from "react-icons/fa"; //user-icon
import { useState } from "react";
import IdentityAuth from "./IdentityAuth";

const InfoAccount = () => {
  const [stateIdentity, setIdentity] = useState(false);

  // SwitchCheckBox
  const [state, setState] = useState(false);

  function handleChange(checked) {
    setState(checked);
  }

  const handleIdentityAuthClick = () => {
    setIdentity(true);
  };

  if (stateIdentity) {
    return <IdentityAuth />;
  }

  return (
    <div className="info-account grid grid-rows-2 gap-y-5">
      {/* Account Information */}
      <div className="row-span-1">
        <div className="grid grid-rows-10 gap-x-3 ml-2 bg-white w-full h-auto rounded-lg p-2 pb-9">
          {/* Header */}
          <div className="info-header row-span-1 ml-2 items-center mt-2 flex mb-1">
            <div className="text-primaryColor"><FaUserCircle size={20} /></div>
            <div className="font-normal text-md ml-2">THÔNG TIN TÀI KHOẢN</div>
          </div>

          {/* Content */}
          <div className="info-container row-span-9 ml-2 items-center mt-3">
            {/* Responsive Grid (adjusts columns based on screen size) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3 w-auto h-full">
              <div className="col-span-1 grid grid-rows-7 items-center">
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Mã tài khoản</p>
                  <div className="id-account font-medium mt-2 text-base">
                    <p>194512</p>
                  </div>
                </div>
                <div className="row-span-1 border-b-1 border-borderColor"></div>
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Trạng thái</p>
                  <div className="status-account font-medium mt-2 flex justify-between">
                    <p className="text-sm bg-dimPrimaryColor items-center text-center rounded-2xl py-0.7 px-2 text-primaryColor">Chưa xác thực</p>
                    <div className="flex items-center mr-5 text-primaryColor cursor-pointer" onClick={handleIdentityAuthClick}>
                      <p className="text-xs font-medium mr-1">Chứng thực</p>
                      <div className="mt-0.7"><FaAngleRight size={9} /></div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 border-b-1 border-borderColor"></div>
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Email</p>
                  <div className="email-account font-medium mt-2 text-base flex justify-between">
                    <p>ewallet123@gmail.com</p>
                    <div className="flex items-center mr-5 text-primaryColor">
                      <p className="text-xs font-medium mr-1">Thay đổi</p>
                      <div className="mt-0.7"><FaAngleRight size={9} /></div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 border-b-1 border-borderColor"></div>
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Số điện thoại</p>
                  <div className="phone-account font-medium mt-2 text-base flex justify-between">
                    <p>06969669696</p>
                    <div className="flex items-center mr-5 text-primaryColor">
                      <p className="text-xs font-medium mr-1">Thay đổi</p>
                      <div className="mt-0.7"><FaAngleRight size={9} /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 grid grid-rows-7 sm:mt-0 mt-9 items-center">
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Tên tài khoản</p>
                  <div className="name-account font-medium mt-2 text-base">
                    <p>Nguyễn Anh Tuấn</p>
                  </div>
                </div>
                <div className="row-span-1 border-b-1 border-borderColor"></div>
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Loại tài khoản</p>
                  <div className="type-account font-medium mt-2 text-base flex justify-between">
                    <p>Tài khoản cá nhân</p>
                    <div className="flex items-center mr-5 text-primaryColor">
                      <p className="text-xs font-medium mr-1">Thay đổi</p>
                      <div className="mt-0.7"><FaAngleRight size={9} /></div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 border-b-1 border-borderColor"></div>
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Thông báo khi có giao dịch phát sinh</p>
                  <div className="notification-account font-medium mt-2 text-base flex justify-between">
                    <p>Nhận thông báo qua email</p>
                    <div className="mr-5"><Switch onChange={handleChange} checked={state} onColor="#0f8be8" height={25} width={50} handleDiameter={16} /></div>
                  </div>
                </div>
                <div className="row-span-1 border-b-1 border-borderColor"></div>
                <div className="row-span-1">
                  <p className="text-textGray0 font-medium text-sm">Địa chỉ</p>
                  <div className="location-account font-medium mt-2 text-base">
                    <p>TP.HCM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="row-span-1">
        <div className="info-sup-account grid grid-rows-9 gap-x-3 ml-2 bg-white w-full h-auto rounded-lg p-2 pb-6 mt-5">
          {/* Header */}
          <div className="info-sup-header row-span-1 ml-2 items-center mt-2 flex mb-1">
            <div className="text-primaryColor"><FaUserPlus size={20} /></div>
            <div className="font-normal text-md ml-2">THÔNG TIN BỔ SUNG</div>
          </div>

          {/* Content */}
          <div className="info-sup-container row-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="col-span-1 grid grid-rows-4 ml-2 items-center">
              <div className="row-span-1">
                <p className="text-textGray0 font-medium text-sm">Họ tên chủ tài khoản</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p>NGUYỄN ANH TUẤN</p>
                </div>
              </div>
              <div className="row-span-1 mt-9 sm:mt-0">
                <p className="text-textGray0 font-medium text-sm">Giấy chứng thực</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p></p>
                </div>
              </div>
              <div className="row-span-1 mt-9 sm:mt-0">
                <p className="text-textGray0 font-medium text-sm">Địa chỉ thường trú</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p>HUFLIT</p>
                </div>
              </div>
              <div className="row-span-1 mt-9 sm:mt-0">
                <p className="text-textGray0 font-medium text-sm">Nghề nghiệp</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p>Giám đốc E-Wallet</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-rows-4 ml-2 items-center">
              <div className="row-span-1 mt-9 sm:mt-0">
                <p className="text-textGray0 font-medium text-sm">Mã số doanh nghiệp</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p>432512</p>
                </div>
              </div>
              <div className="row-span-1 mt-9 sm:mt-0">
                <p className="text-textGray0 font-medium text-sm">Giấy chứng thực</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p></p>
                </div>
              </div>
              <div className="row-span-1">
                <p className="text-textGray0 font-medium text-sm">Địa chỉ liên lạc</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p>Nguyễn Văn Cừ, Q5</p>
                </div>
              </div>
              <div className="row-span-1">
                <p className="text-textGray0 font-medium text-sm">Nghề nghiệp</p>
                <div className="type-account font-medium mt-2 text-base">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAccount;