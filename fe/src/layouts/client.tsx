import { Outlet } from "react-router-dom";
import Header_component from "../components/header";
import SideBar_component from "../components/sideBar";

export default function Layout_client() {
  return (
    <div className="w-[95vw] mx-auto">
      <Header_component />
      <main className="flex mt-5">
        <aside className="max-w-[200px]">
          <SideBar_component />
        </aside>
        <div className="overflow-y-auto w-full mt-0.5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
