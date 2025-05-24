import { Bell, ChevronDown, MessageCircleMore, Users } from "lucide-react";
import { useViewProfileQuery } from "../../redux/sliceApis/auth";
import useDarkMode from "../../utils/getTheme";
import { useRef, useState } from "react";
import Logout_component from "../logout";
import useClickOutSide from "../../hooks/useClickOutSide";
import Notification_component from "../notification";
import Messenger_component from "../messenger";

export default function Auth_header() {
  const { data, isLoading } = useViewProfileQuery();
  const [activeTab, setActiveTab] = useState<string>("");
  const ref_Dropdown = useRef(null);
  const ref_Tab = useRef(null);
  const [statusDropdown, setStatusDropDown] = useState(false);
  const isDarkMode = useDarkMode();
  function toggleDropDown() {
    setStatusDropDown((pre) => !pre);
  }
  // click avatar
  useClickOutSide(ref_Dropdown, () => {
    setStatusDropDown(false);
  });

  // tab : messenger || notification
  useClickOutSide(ref_Tab, () => {
    setActiveTab("");
  });

  const iconLink = [
    <Users strokeWidth={2} size={20} />,
    <MessageCircleMore strokeWidth={2} size={20} />,
    <Bell strokeWidth={2} size={20} />,
  ];

  function updateActiveTab(index: number) {
    const tabValue =
      index === 1 ? "messenger" : index === 2 ? "notification" : "";
    setActiveTab((prev) => (prev === tabValue ? "" : tabValue));
  }

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
      <div
        ref={ref_Tab}
        className="relative *:relative flex items-center gap-x-4 *:cursor-pointer"
      >
        {/* had login */}
        <>
          {iconLink?.map((icon, i) => (
            <button
              onClick={() => updateActiveTab(i)}
              className={`${
                isDarkMode
                  ? "bg-[#333334] text-gray-100"
                  : "bg-[#F0F2F5] text-gray-900 "
              } p-2 border-transparent rounded-full bg-[#4F515155] w-9 h-9 opacity-80 
              hover:opacity-100 duration-200`}
            >
              {icon}
              <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
            </button>
          ))}
          {/* tab : messenger || notification */}
          <div
            className={`${
              isDarkMode
                ? "bg-[#333334] text-gray-100"
                : "bg-[#F0F2F5] text-gray-900 "
            } !absolute top-12 right-0 shadow *:px-4 *:py-2 rounded-lg *:w-[342px] *:max-h-[85vh] *:opacity-80`}
          >
            {activeTab === "notification" && <Notification_component />}
            {activeTab === "messenger" && <Messenger_component />}
          </div>
          {/* avatar */}
          <button
            className="relative"
            onClick={() => toggleDropDown()}
            ref={ref_Dropdown}
          >
            <img
              src={
                data?.data?.data?.picture
                  ? data?.data?.data?.picture
                  : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
              }
              alt=""
              className="rounded-full w-10 h-10 border"
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
            {statusDropdown && <Logout_component />}
          </button>
        </>
      </div>
    </div>
  );
}
