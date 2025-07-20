import { Outlet } from "react-router-dom";
import Header_component from "../components/header/header";
import SideBar_component from "../components/sideBar";
import Header_mobile_component from "../components/header/header.mobile";
import useDarkMode from "../utils/getTheme";

export function Layout_client() {
  return (
    <>
      {/* <Header_component /> */}
      <Header_mobile_component />
      <div className="w-[95vw] max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}

// layout desktop
export function Layout_client_desktop() {
  const isDarkMode = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#0B1117] text-gray-100"
          : "bg-[#fff] text-gray-900 *:border-r"
      } w-screen h-screen grid lg:grid-cols-[230px_calc(100%-230px)] justify-between`}
    >
      <div className="max-h-scren">
        <SideBar_component />
      </div>
      <div
        className={`${
          isDarkMode ? "bg-black text-gray-100" : "bg-[#f7f7f7] text-gray-900"
        } w-full flex justify-center h-full !border-none overflow-y-scroll`}
      >
        <div className="w-full max-w-[1200px] h-full pl-10 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
