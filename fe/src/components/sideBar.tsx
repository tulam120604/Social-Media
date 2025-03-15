import { Link, NavLink } from "react-router-dom";
import { urls_sidebar, urls_explore, copyrights } from "../config/links";
import { iType_uri_sideBar } from "../config/types";
import { useAppSelector } from "../hooks/redux";

export default function SideBar_component() {
  const { status } = useAppSelector((status) => status?.toggleStore);
  return (
    <section className=" pr-4 sticky top-15 h-[calc(100vh-60px)] scroll-hover">
      {/* 1 */}
      {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
        <NavLink
          key={i}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-2 whitespace-nowrap opacity-85 p-2 bg-gray-200 duration-150 rounded-md mb-1"
              : "flex items-center gap-x-2 whitespace-nowrap opacity-85 p-2 hover:bg-gray-200 duration-150 rounded-md mb-1"
          }
          to={uri?.path}
        >
          {uri?.icon &&
            (typeof uri.icon === "function" ? <uri.icon /> : uri.icon)}
          {status && <span>{uri?.name}</span>}
        </NavLink>
      ))}

      {/* 2 */}
      <div className="border-t border-gray-400 mt-4 py-4">
        {urls_explore?.map((uri: iType_uri_sideBar, i: number) => (
          <NavLink
            key={i}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-2 whitespace-nowrap opacity-85 p-2 bg-gray-200 duration-150 rounded mb-1"
                : "flex items-center gap-x-2 whitespace-nowrap opacity-85 p-2 hover:bg-gray-200 duration-150 rounded mb-1"
            }
            to={uri?.path}
          >
            {uri?.icon &&
              (typeof uri.icon === "function" ? <uri.icon /> : uri.icon)}
            {status && <span>{uri?.name}</span>}
          </NavLink>
        ))}
      </div>

      {/* 3 */}
      {status && (
        <>
          <div className="opacity-70 text-sm whitespace-normal flex flex-wrap gap-1 border-t border-gray-400 py-4">
            {copyrights?.map((uri: iType_uri_sideBar, i: number) => (
              <Link key={i} to={uri?.path}>
                {uri?.name}
              </Link>
            ))}
          </div>
          <span className="opacity-50 text-xs">© 2025 Google LLC</span>
        </>
      )}
    </section>
  );
}
