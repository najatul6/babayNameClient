import Footer from "@/components/RootView/common/Footer";
import Header from "@/components/RootView/common/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto">
      <Header />
      </div>
      <hr />
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default RootLayout;
