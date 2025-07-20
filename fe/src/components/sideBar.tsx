import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { urls_sidebar } from "../config/links";
import { iType_uri_sideBar } from "../config/types";
import useDarkMode from "../utils/getTheme";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import ReloadPage from "./reloadPage";
import { LoaderCircle } from "lucide-react";

export default function SideBar_component() {
  const isDarkMode = useDarkMode();
  const { data, isLoading, isError } = useViewProfileQuery(undefined, {});
  const { pathname } = useLocation();
  const navigate = useNavigate();
  function backToHome() {
    if (pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  }

  const style =
    "flex gap-x-3 items-center whitespace-nowrap opacity-95 px-2 py-3 duration-150 rounded-md mb-1";

  const styleActive = `
  ${isDarkMode ? "bg-[#3B3D3E]" : "bg-[#F0F2F5]"} ${style}`;
  const styleNoActive = `${
    isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
  } ${style}`;
  return (
    <section className="scroll-hover py-4 px-3 w-full">
      {isLoading && (
        <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
          <LoaderCircle className=" animate-spin" />
        </div>
      )}
      {!isLoading && !isError && (
        <>
          <div className="flex items-center gap-x-2 cursor-pointer px-2 py-5 mb-5">
            <button
              onClick={backToHome}
              className="opacity-85 font-bold text-2xl cursor-pointer !font-serif"
            >
              Linksta
            </button>
          </div>
          {/* 1 */}
          {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive ? styleActive : styleNoActive
              }
              to={uri?.path}
            >
              <div className="*:w-7 *:h-7">
                {uri?.icon &&
                  (typeof uri.icon === "function" ? <uri.icon /> : uri.icon)}
              </div>
              <span>{uri?.name}</span>
            </NavLink>
          ))}
          {/* user */}
          <NavLink
            className={({ isActive }) =>
              isActive ? styleActive : styleNoActive
            }
            to={`/profile/${data?.data?.data?._id}`}
          >
            <img
              src={
                data?.data?.data?.picture
                  ? data?.data?.data?.picture
                  : "https://picsum.photos/320/180"
              }
              alt=""
              className="rounded-full w-7 h-7 object-cover border-none"
            />
            <span>Profile</span>
          </NavLink>
        </>
      )}
      {isError && (
        <div className="flex gap-x-1">
          <span>Lỗi!</span>
          <ReloadPage />
        </div>
      )}
    </section>
  );
}
