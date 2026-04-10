import { Outlet } from "react-router";
import HeaderComp from "../header/Header";
import FooterComp from "../footer/Footer";

const RootLayout = () => {
  return (
    <div className="space-y-4 bg-black">
      <HeaderComp />
      <Outlet />
      <FooterComp />
    </div>
  );
};

export default RootLayout;
