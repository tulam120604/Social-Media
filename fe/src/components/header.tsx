import { Disc3 } from "lucide-react";
import Search_component from "./search";
import Login_button from "./button_login";
import useDarkMode from "../utils/getTheme";
import { Link } from "react-router-dom";

export default function Header_component() {
  const isDarkMode = useDarkMode();
  return (
    <header
      className={`${
        isDarkMode ? "bg-white" : "bg-black"
      } w-full py-2 sticky top-0 z-[10] shadow-lg`}
    >
      <div className="flex items-center justify-between w-[95vw] mx-auto">
        {/* logo */}
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Disc3 color="#413B95" width={30} height={30}/>
          <Link to={'/'} className="opacity-85 font-bold text-xl text-[#413B95]">Social Media</Link>
        </div>

        {/* search */}
        <Search_component />

        {/* login */}
        <Login_button />
      </div>
    </header>
  );
}
