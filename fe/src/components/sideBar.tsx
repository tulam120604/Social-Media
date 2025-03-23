import { Link, NavLink } from "react-router-dom";
import { urls_sidebar, copyrights } from "../config/links";
import { iType_uri_sideBar } from "../config/types";
import { useAppDispath, useAppSelector } from "../hooks/redux";
import { updateStatus } from "../redux/slices/toggleSlice";
import { ChevronLeft } from "lucide-react";

export default function SideBar_component() {
  const dispath = useAppDispath();
  const { status } = useAppSelector((status) => status?.toggleStore);
  const styleActive = `grid ${
    status ? "grid-cols-[50px_calc(100%-50px)]" : "place-content-center"
  } items-center whitespace-nowrap opacity-85 p-2 bg-gray-200 duration-150 rounded-md mb-1`;
  const styleNoActive = `grid ${
    status ? "grid-cols-[50px_calc(100%-50px)]" : "place-content-center"
  } items-center whitespace-nowrap opacity-85 p-2 hover:bg-gray-200 duration-150 rounded-md mb-1`;
  return (
    <section className="scroll-hover bg-white rounded py-4 pl-3">
      {/* 1 */}
      {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
        <NavLink
          key={i}
          className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          to={uri?.path}
        >
          {uri?.icon &&
            (typeof uri.icon === "function" ? <uri.icon /> : uri.icon)}
          {status && <span className="text-sm">{uri?.name}</span>}
        </NavLink>
      ))}

      {/* 2 */}
      <div className="border-y border-gray-400 mt-4 py-4">
        <strong className="text-sm opacity-80 font-medium">Group</strong>
        <div className="mt-2">
          {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive ? styleActive : styleNoActive
              }
              to={uri?.path}
            >
              <img
                className="rounded-full w-6 h-6"
                src="https://picsum.photos/320/180"
                alt=""
              />
              {status && <span className="text-sm">{uri?.name}</span>}
            </NavLink>
          ))}
        </div>
      </div>
      <button
        className="rounded-full p-0.5 my-2 border border-transparent active:border-gray-300 
      cursor-pointer duration-200"
        onClick={() => dispath(updateStatus())}
      >
        <ChevronLeft strokeWidth={1.8} size={20} />
      </button>
      {/* 3 */}
      {status && (
        <>
          <div className="opacity-70 text-sm whitespace-normal flex flex-wrap gap-1 border-gray-400 py-4">
            {copyrights?.map((uri: iType_uri_sideBar, i: number) => (
              <Link key={i} to={uri?.path}>
                {uri?.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
