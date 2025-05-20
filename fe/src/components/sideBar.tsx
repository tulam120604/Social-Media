import { Link, NavLink } from "react-router-dom";
import { urls_sidebar, copyrights } from "../config/links";
import { iType_uri_sideBar } from "../config/types";
import useDarkMode from "../utils/getTheme";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import ReloadPage from "./reloadPage";
import { LoaderCircle } from "lucide-react";

export default function SideBar_component() {
  const isDarkMode = useDarkMode();
  const { data, isLoading, isError } = useViewProfileQuery(undefined, {
  });
  const styleActive = `
  ${isDarkMode ? "bg-[#3B3D3E]" : "bg-[#F0F2F5]"}
  grid grid-cols-[50px_auto] items-center whitespace-nowrap opacity-85 p-2 
  duration-150 rounded-md mb-1`;
  const styleNoActive = `${
    isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
  } grid grid-cols-[50px_auto] items-center whitespace-nowrap opacity-85 p-2 duration-150 rounded-md mb-1`;
  return (
    <section
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      } scroll-hover rounded py-4 px-3 w-full h-full`}
    >
      {isLoading && (
        <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
          <LoaderCircle className=" animate-spin" />
        </div>
      )}
      {!isLoading && !isError && (
        <>
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
              className="rounded-full w-5 h-5 object-cover border border-transparent"
            />
            <span className="text-sm">{data?.data?.data?.userName}</span>
          </NavLink>
          {/* 1 */}
          {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive ? styleActive : styleNoActive
              }
              to={uri?.path}
            >
              {uri?.icon &&
                (typeof uri.icon === "function" ? <uri.icon /> : uri.icon)}
              <span className="text-sm">{uri?.name}</span>
            </NavLink>
          ))}

          {/* 2 */}
          <div className="border-y border-gray-400 mt-4 py-4">
            <strong className="text-sm opacity-80 font-medium">Group</strong>
            <div className="mt-2">
              <span className="text-sm opacity-80">No group!</span>
            </div>
          </div>
          {/* 3 */}
          <div className="opacity-70 text-sm whitespace-normal flex flex-wrap gap-1 border-gray-400 py-4">
            {copyrights?.map((uri: iType_uri_sideBar, i: number) => (
              <Link key={i} to={uri?.path}>
                {uri?.name}
              </Link>
            ))}
          </div>
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
