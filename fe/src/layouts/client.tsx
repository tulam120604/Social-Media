import { Outlet, useLocation } from "react-router-dom";
import Header_component from "../components/header/header";
import SideBar_component from "../components/sideBar";
import Header_mobile_component from "../components/header/header.mobile";
import useDarkMode from "../utils/getTheme";
import Friends_request from "../pages/client/home/friends_request";
import Chat_component from "../chat/view.chat";
import Brithdays from "../pages/client/home/brithdays";

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
  const { pathname } = useLocation();
  const isDarkMode = useDarkMode();
  return (
    <div className="flex mt-4 gap-x-4 items-start h-full">
      <aside
        className="hidden lg:block space-y-4 sticky *:shadow-lg 
      top-18 w-[250px] h-[calc(100vh-85px)] overflow-hidden"
      >
        <SideBar_component />
      </aside>
      <div className="w-full lg:w-[calc(100%-250px)] h-full flex justify-between gap-x-4">
        <Outlet />
        {pathname === "/" && (
          <div>
            <div
              className={`${
                isDarkMode
                  ? "*:bg-[#252728] text-gray-100"
                  : "*:bg-[#fff] text-gray-900 "
              } hidden lg:block space-y-4 *:p-4 *:rounded *:shadow-lg sticky top-18 
              w-[300px] overflow-y-auto scroll-hover max-h-[calc(100vh-85px)]`}
            >
              <Friends_request />
              <Chat_component />
              <Brithdays />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
