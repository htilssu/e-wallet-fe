﻿import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.jsx";
import LoginForm from "../../components/auth/AuthForm.jsx";
import TopUp from "../../components/topup/TopUp.jsx";
import AtmLinked from "../../components/atm_linked/AtmLinked.jsx";
import { PageNotFound } from "./system-component/PageNotFound.jsx";
import BankTransferModal from "../../components/topup/BankTransferModal.jsx";
import QRPayment from "../../components/bank/paymentMethods/QRPayment.jsx";
import WithdrawMoney from "../../components/withdraw_money/WithdrawMoney.jsx";
import BalanceFilter from "../../components/bdsd/bdsd.jsx";
import AddInfoAtm from "../../components/add_atm_linked/AddInfoAtm.jsx";
import HomePage from "../../components/home/Home.jsx";
import ServicePayment from "../../components/bank/paymentMethods/ServicePayment.jsx";
import TranHistory from "../../components/history/ TranHistory.jsx";
import TransactionDetail from "../../components/history/TransactionDetail.jsx";
import Example from "../../components/history/test.jsx";
import OTPverification from "../../components/otpverify/OTPverification.jsx";
import ManagementPersonalInfo from "../../components/infoAccount/managementPersonal/ManagementPersonalInfo.jsx";
import InfoAccount from "../../components/infoAccount/managementPersonal/infoAccountAuth/InfoAccount.jsx";
import SettingAdmitTransaction from "../../components/infoAccount/managementPersonal/settingAdmitTransaction/SettingAdmitTransaction.jsx";
import ChangePassword from "../../components/infoAccount/managementPersonal/changePassword/ChangePassword.jsx";
import SendOTP from "../../components/infoAccount/managementPersonal/changePassword/SendOTP.jsx";
import RegistrationForm from "../../components/auth/RegistrationForm.jsx";
import TransferMoney from "../../components/bank/paymentMethods/TransferMoney.jsx";
import TransactionSuccess from "../../components/bank/statusTransaction/TransactionSuccess.jsx";
import Docs from "../../routes/Docs.jsx";
import Dashboard from "../../components/admin/dashboard/Dashboard.jsx";
import CustomerManange from "../../components/admin/customer/CustomerManange.jsx";
import Admin from "../../components/admin/dashboard/Admin.jsx";
import UnAuthHome from "../../components/home/UnAuthHome.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        // element: <HomePage />,
        element: <UnAuthHome />,
      },
      {
        path: "topup",
        element: <TopUp />,
      },
      {
        path: "addInfoAtm",
        element: <AddInfoAtm />,
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
        path: "qrpayment",
        element: <QRPayment />,
      },
      {
        path: "transfermoney",
        element: <TransferMoney />,
      },
      {
        path: "transactions/transaction/success/:id?",
        element: <TransactionSuccess />,
      },
      {
        path: "withdraw",
        element: <WithdrawMoney />,
      },
      {
        path: "bdsd",
        element: <BalanceFilter />,
      },

      {
        path: "servicepayment/:id",
        element: <ServicePayment />,
      },
      {
        path: "transactions",
        element: <TranHistory />,
      },
      {
        path: "transactions/transaction/:id",
        element: <TransactionDetail />,
      },
      {
        path: "otpverification",
        element: <OTPverification />,
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
            children: [
              {
                path: "send-otp",
                element: <SendOTP />,
              },
            ],
          },
        ],
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "customer-manage",
            element: <CustomerManange />,
          },
        ],
      },
      {
        path: "test",
        element: <Example />,
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
      {
        path: "register",
        element: <RegistrationForm />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);
