import { Outlet } from "react-router-dom";
import Header_component from "../components/header";
import SideBar_component from "../components/sideBar";
import Box_profile_component from "../components/box_profile";
import Header_mobile_component from "../components/header.mobile";

export function Layout_client() {
  return (
    <>
      <Header_component />
      <Header_mobile_component/>
      <div className="w-[95vw] mx-auto">
        <Outlet />
      </div>
    </>
  );
}

// layout include sidebar
export function Layout_client_with_sidebar() {
  return (
    <div className="flex mt-5 gap-x-4">
      <aside
        className="hidden lg:block space-y-4 sticky *:shadow-lg 
      top-21 w-[250px] h-[calc(100vh-85px)] overflow-hidden"
      >
        <Box_profile_component />
        <SideBar_component />
      </aside>
      <div className="overflow-y-auto w-full mt-0.5">
        <Outlet />
      </div>
    </div>
  );
}
