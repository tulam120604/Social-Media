import { Link, NavLink } from "react-router-dom";
import { urls_sidebar, copyrights } from "../config/links";
import { iType_uri_sideBar } from "../config/types";

export default function SideBar_component() {
  const styleActive = `grid grid-cols-[50px_auto] items-center whitespace-nowrap opacity-85 p-2 bg-gray-200 duration-150 rounded-md mb-1`;
  const styleNoActive = `grid grid-cols-[50px_auto] items-center whitespace-nowrap opacity-85 p-2 hover:bg-gray-200 duration-150 rounded-md mb-1`;
  return (
    <section className="scroll-hover bg-white rounded py-4 px-3 w-full h-[calc(100%-200px)]">
      {/* 1 */}
      {urls_sidebar?.map((uri: iType_uri_sideBar, i: number) => (
        <NavLink
          key={i}
          className={({ isActive }) => (isActive ? styleActive : styleNoActive)}
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
              <span className="text-sm">{uri?.name}</span>
            </NavLink>
          ))}
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
    </section>
  );
}
