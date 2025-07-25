import DashboardSidebar from "@/components/DashboardView/common/DashboardSidebar";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useAuth();
  return (
    <div className="relative h-screen scroll-smooth">
      <header className="flex shadow-md py-1 px-4 sm:px-7 bg-background2 min-h-[70px] tracking-wide z-[9999] fixed top-0 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full relative bg-background2">
          <Link to="/" className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center w-[150px] h-[30px]">
              {/* <img
                src={headerLogo}
                alt=""
                className="w-full h-fit object-center"
              /> */}
              <h1 className="text-2xl text-baseColor font-bold">Dashboard</h1>
            </div>
          </Link>

          <img
            src={
              user?.photoURL ||
              "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
            }
            alt="profile-pic"
            className="w-10 h-10 rounded-full border-2 border-baseColor cursor-pointer"
          />
        </div>
      </header>
      <div className="mt-12">
        <div className="flex items-start">
          <DashboardSidebar
            open={openSidebar} setOpen={setOpenSidebar}
          />

          <section className="main-content w-full overflow-auto p-6">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;


