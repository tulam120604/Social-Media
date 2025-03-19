import { Menu } from "lucide-react";
import Search_component from "./search";
import Login_button from "./button_login";
import { useAppDispath } from "../hooks/redux";
import { updateStatus } from "../redux/slices/toggleSlice";
import useDarkMode from "../utils/getTheme";
import { Link } from "react-router-dom";

export default function Header_component() {
  const disPath = useAppDispath();
  const isDarkMode = useDarkMode();
  return (
    <header
      className={`${
        isDarkMode ? "bg-white" : "bg-black"
      } w-full py-2 sticky top-0 z-[10]`}
    >
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Menu
            className="p-1.5 w-9 h-9 rounded-full hover:bg-gray-100 border border-transparent 
          active:border-gray-400 "
            onClick={() => disPath(updateStatus())}
          />
          <Link to={'/'} className="opacity-85 font-bold text-xl">Utube</Link>
        </div>

        {/* search */}
        <Search_component />

        {/* login */}
        <Login_button />
      </div>
    </header>
  );
}
