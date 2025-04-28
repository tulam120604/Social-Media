import { NavLink } from "react-router-dom";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import { Bell, Home, MessageCircleMore, Users } from "lucide-react";

export default function Header_mobile_component() {
  const { data, isLoading } = useViewProfileQuery();

  return (
    <div
      className="lg:hidden flex w-screen fixed bottom-0 bg-white justify-between pt-2 px-4 border-t 
    *:border-b-3 *:border-transparent *:pb-2 *:relative"
    >
      {isLoading && (
        <div className="w-full flex justify-between items-center *:animate-pulse *:bg-gray-100 *:rounded-full *:w-9 *:h-9">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      {data?.status === 200 && (
        <>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <Home strokeWidth={1.7} size={35} />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" />
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <Users strokeWidth={1.7} size={35} />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" />
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <MessageCircleMore strokeWidth={1.7} size={35} />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" />
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <Bell strokeWidth={1.7} size={35} />
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" />
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <img
              src={data?.data?.data?.picture}
              alt=""
              className="rounded-full w-9 h-9"
            />
          </NavLink>
        </>
      )}
    </div>
  );
}
