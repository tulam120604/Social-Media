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
  return (
    <div className="hidden lg:block">
      {isLoading && (
        <div className="flex gap-x-4 items-center *:animate-pulse *:bg-gray-100 *:rounded-full *:w-8 *:h-8">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      <div className="flex items-center gap-x-6 *:cursor-pointer opacity-90 *:relative">
        {/* had login */}
        <>
          <button>
            <Users strokeWidth={1.7} size={25} />
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
          </button>
          <button>
            <MessageCircleMore strokeWidth={1.7} size={25} />
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
          </button>
          <button>
            <Bell strokeWidth={1.7} size={25} />
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
          </button>
          <button className="relative" onClick={() => toggleDropDown()}>
            <img
              src={data?.data?.data?.picture}
              alt=""
              className="rounded-full w-8 h-8"
            />
            <ChevronDown
              className={`${
                isDarkMode
                  ? "bg-[#e7f2fc] text-gray-900"
                  : "bg-black text-gray-100"
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
