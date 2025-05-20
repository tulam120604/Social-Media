import { Outlet } from "react-router-dom";
import Header_component from "../components/header";
import SideBar_component from "../components/sideBar";
import Header_mobile_component from "../components/header.mobile";

export function Layout_client() {
  return (
    <>
      <Header_component />
      <Header_mobile_component />
      <div className="w-[95vw] max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}

// layout include sidebar
export function Layout_client_with_sidebar() {
  return (
    <div className="flex mt-5 gap-x-4 items-start">
      <aside
        className="hidden lg:block space-y-4 sticky *:shadow-lg 
      top-21 w-[250px] h-[calc(100vh-85px)] overflow-hidden"
      >
        <SideBar_component />
      </aside>
      <div className="w-full lg:w-[calc(100%-250px)]">
        <Outlet />
      </div>
    </div>
  );
}
