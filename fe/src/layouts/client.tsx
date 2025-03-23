import { Outlet } from "react-router-dom";
import Header_component from "../components/header";
import SideBar_component from "../components/sideBar";
import Box_profile_component from "../components/box_profile";

export function Layout_client() {
  return (
    <>
      <Header_component />
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
      <aside className="hidden lg:block max-w-[200px]">
        <div className="sticky top-20 space-y-4">
          <Box_profile_component />
          <SideBar_component />
        </div>
      </aside>
      <div className="overflow-y-auto w-full mt-0.5">
        <Outlet />
      </div>
    </div>
  );
}
