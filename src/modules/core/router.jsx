import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.jsx";
import LoginForm from "../../components/auth/LoginForm.jsx";
import TopUp from "../../components/topup/TopUp.jsx";
import AtmLinked from "../../components/atm_linked/AtmLinked.jsx";
import { PageNotFound } from "./system-component/PageNotFound.jsx";
import BankTransferModal from "../../components/bank/paymentMethods/BankTransferModal.jsx";
import QRPayment from "../../components/bank/paymentMethods/QRPayment.jsx";
import WithdrawMoney from "../../components/withdraw_money/WithdrawMoney.jsx";
import BalanceFilter from "../../components/bdsd/bdsd.jsx";
import AddInfoAtm from "../../components/add_atm_linked/AddInfoAtm.jsx";
import HomePage from "../../components/home/Home.jsx";

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
        path: "AddInfoAtm",
        element: <AddInfoAtm/>,
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
        path: "withdraw",
        element: <WithdrawMoney/>
      },
      {
        path: "bdsd",
        element: <BalanceFilter/>,
      },

      {
        path: "homepage",
        element: <HomePage />,
      }
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
