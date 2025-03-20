import { Outlet } from "react-router-dom";
import Header_component from "../components/header";
import SideBar_component from "../components/sideBar";

export function Layout_client() {
  return (
    <div className="w-[95vw] mx-auto">
      <Header_component />
      <Outlet />
    </div>
  );
}

// layout include sidebar
export function Layout_client_with_sidebar() {
  return (
    <div className="flex mt-5 gap-x-4">
      <aside className="hidden lg:block max-w-[200px]">
        <SideBar_component />
      </aside>
      <div className="overflow-y-auto w-full mt-0.5">
        <Outlet />
      </div>
    </div>
  );
}
