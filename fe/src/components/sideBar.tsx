import { Link, NavLink } from "react-router-dom";
import { urls_sidebar, copyrights } from "../config/links";
import { iType_uri_sideBar } from "../config/types";
import { useAppSelector } from "../hooks/redux";

export default function SideBar_component() {
  const { status } = useAppSelector((status) => status?.toggleStore);
  const styleActive = `grid ${
    status ? "grid-cols-[50px_auto]" : "place-content-center"
  } items-center whitespace-nowrap opacity-85 p-2 bg-gray-200 duration-150 rounded-md mb-1`;
  const styleNoActive = `grid ${
    status ? "grid-cols-[50px_auto]" : "place-content-center"
  } items-center whitespace-nowrap opacity-85 p-2 hover:bg-gray-200 duration-150 rounded-md mb-1`;
  return (
    <section className="pr-4 sticky top-20 h-[calc(100vh-80px)] scroll-hover">
      {/* 1 */}
      {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
        <NavLink
          key={i}
          className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
          to={uri?.path}
        >
          {uri?.icon &&
            (typeof uri.icon === "function" ? <uri.icon /> : uri.icon)}
          {status && <span>{uri?.name}</span>}
        </NavLink>
      ))}

      {/* 2 */}
      <div className="border-t border-gray-400 mt-4 py-4">
        {status && (
          <strong className="text-sm opacity-80 font-medium">Subscribe</strong>
        )}
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
              {status && <span>{uri?.name}</span>}
            </NavLink>
          ))}
        </div>
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
