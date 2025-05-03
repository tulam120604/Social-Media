import Search_component from "./search";
import Auth_header from "./auth_header";
import useDarkMode from "../utils/getTheme";
import { Link } from "react-router-dom";

export default function Header_component() {
  const isDarkMode = useDarkMode();
  return (
    <header
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      } w-full py-2 sticky top-0 z-[10] shadow-lg`}
    >
      <div className="flex items-center justify-between w-[95vw] max-w-[1280px] mx-auto">
        {/* logo */}
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Link
            to={"/"}
            className="opacity-85 font-bold text-2xl"
          >
            Linksta
          </Link>
        </div>

        {/* search */}
        <Search_component />

        {/* auth header */}
        <Auth_header />
      </div>
    </header>
  );
}
