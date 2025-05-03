import { Bell, ChevronDown, MessageCircleMore, Users } from "lucide-react";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import useDarkMode from "../utils/getTheme";
import { useState } from "react";
import Logout_component from "./logout";

export default function Auth_header() {
  const { data, isLoading } = useViewProfileQuery();
  const [statusDropdown, setStatusDropDown] = useState(false);
  const isDarkMode = useDarkMode();
  function toggleDropDown() {
    setStatusDropDown((prev) => !prev);
  }

  const iconLink = [
    <Users strokeWidth={2} size={20} />,
    <MessageCircleMore strokeWidth={2} size={20} />,
    <Bell strokeWidth={2} size={20} />,
  ];

  return (
    <div className="hidden lg:block">
      {isLoading && (
        <div className="flex gap-x-4 items-center *:animate-pulse *:bg-gray-100 *:rounded-full *:w-10 *:h-10">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      <div className="flex items-center gap-x-4 *:cursor-pointer opacity-90 *:relative">
        {/* had login */}
        <>
          {iconLink?.map((icon) => (
            <button
              className={`${
                isDarkMode
                  ? "bg-[#333334] text-gray-100"
                  : "bg-[#F0F2F5] text-gray-900 "
              } p-2 border-transparent rounded-full bg-[#4F515155] w-9 h-9 opacity-80 hover:opacity-100 duration-200`}
            >
              {icon}
              <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
            </button>
          ))}
          <button className="relative" onClick={() => toggleDropDown()}>
            <img
              src={data?.data?.data?.picture}
              alt=""
              className="rounded-full w-10 h-10"
            />
            <ChevronDown
              className={`${
                isDarkMode
                  ? "bg-[#1C1C1D] text-gray-100"
                  : "bg-[#F1F5F9] text-gray-900 "
              } absolute opacity-80 bottom-0 right-0 border-2 border-gray-600 rounded-full`}
              size={15}
            />
            {/* dropdown */}
            {statusDropdown && (
              <Logout_component props={{ setStatusDropDown, toggleDropDown }} />
            )}
          </button>
        </>
      </div>
    </div>
  );
}