import { Bookmark } from "lucide-react";
import useDarkMode from "../utils/getTheme";

export default function Button_save() {
    const isDarkMode = useDarkMode();
  return (
    <button className={`${isDarkMode ? 'bg-[#292827]' : 'bg-gray-100'} flex items-center gap-1.5 text-sm`}>
      <Bookmark width={20} height={20} strokeWidth={1.5}/>
      <span className="font-medium">Save</span>
    </button>
  );
}
