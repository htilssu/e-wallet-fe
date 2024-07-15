import Footer from "../../../components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "../system-component/Navbar.jsx";

export function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className={"mt-24"}>
        <div className={"w-full h-[250px]"}></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
