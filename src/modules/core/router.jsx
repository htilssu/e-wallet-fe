import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.jsx";
import LoginForm from "../../components/auth/LoginForm.jsx";
import TopUp from "../../components/topup/TopUp.jsx";
import AtmLinked from "../../components/atm_linked/AtmLinked.jsx";
import { PageNotFound } from "./system-component/PageNotFound.jsx";
import BankTransferModal from "../../components/bank/paymentMethods/BankTransferModal.jsx";
import PersonalInfoForm from "../../components/infoAccount/PersonalInfoForm.jsx";
import ManagementPersonalInfo from './../../components/infoAccount/managementPersonal/ManagementPersonalInfo';
import SettingAdmitTransaction from './../../components/infoAccount/managementPersonal/settingAdmitTransaction/SettingAdmitTransaction';
import ChangePassword from './../../components/infoAccount/managementPersonal/changePassword/ChangePassword';
import SendOTP from "../../components/infoAccount/managementPersonal/changePassword/SendOTP.jsx";
import InfoAccount from "../../components/infoAccount/managementPersonal/infoAccountAuth/InfoAccount.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "topup",
        element: <TopUp />,
      },
      {
        path: "atm/link",
        element: <AtmLinked />,
      },
      {
        path: "atm/link",
        element: <AtmLinked />,
      },
      {
        path: "topup/banktransfer",
        element: <BankTransferModal />,
      },
      {
        path: "info-personal",
        element: <PersonalInfoForm />,
      },
      {
        path: "management-personal",
        element: <ManagementPersonalInfo />,
        children: [
          {
            path: "info-account",
            element: <InfoAccount />,
          },
          {
            path: "transaction-account",
            element: <SettingAdmitTransaction />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
            children:[
              {
                path: "send-otp",
                element: <SendOTP />,
              },
            ]
          },
        ]
      },
    ],
    errorElement: <PageNotFound />,
  },
  {
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);
