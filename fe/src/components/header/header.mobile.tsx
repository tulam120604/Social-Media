import { NavLink } from "react-router-dom";
import { useViewProfileQuery } from "../../redux/sliceApis/auth";
import { Bell, Home, MessageCircleMore, Users } from "lucide-react";
import useDarkMode from "../../utils/getTheme";

export default function Header_mobile_component() {
  const isDarkMode = useDarkMode();
  const { data, isLoading } = useViewProfileQuery(undefined, {
  });

  return (
    <div
      className={`${isDarkMode ? "bg-[#252728]" : "bg-gray-300"} 
              lg:hidden flex w-screen fixed bottom-0 justify-between pt-2 px-4 border-t 
    *:border-b-3 *:border-transparent *:pb-2 *:relative z-10`}
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
            {/* <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" /> */}
          </NavLink>
          <NavLink
            to={"/friends"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <Users strokeWidth={1.7} size={35} />
            {/* <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" /> */}
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <MessageCircleMore strokeWidth={1.7} size={35} />
            {/* <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" /> */}
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <Bell strokeWidth={1.7} size={35} />
            {/* <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500" /> */}
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 !border-blue-500" : ""
            }
          >
            <img
              src={
                data?.data?.data?.picture
                  ? data?.data?.data?.picture
                  : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
              }
              alt=""
              className="rounded-full w-9 h-9"
            />
          </NavLink>
        </>
      )}
    </div>
  );
}
