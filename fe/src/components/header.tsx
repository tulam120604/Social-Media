import { Menu } from "lucide-react";
import Search_component from "./search";
import Login_button from "./action_login";
import { useAppDispath } from "../hooks/redux";
import { updateStatus } from "../redux/slices/toggleSlice";

export default function Header_component() {
  const disPath = useAppDispath();
  return (
    <header className="w-full py-2 sticky top-0 bg-white z-[10]">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-x-2 cursor-pointer">
          <Menu
            className="p-1.5 w-9 h-9 rounded-full hover:bg-gray-100 border border-transparent 
          active:border-gray-400 "
            onClick={() => disPath(updateStatus())}
          />
          <span className="opacity-85 font-bold text-xl">Utube</span>
        </div>

        {/* search */}
        <Search_component />

        {/* login */}
        <Login_button />
      </div>
    </header>
  );
}
