import {EllipsisVertical } from "lucide-react";
import useDarkMode from "../../utils/getTheme";

export default function Button_EllipsisVertical() {
    const isDarkMode = useDarkMode();
  return (
    <button className={`${isDarkMode ? 'bg-[#292827]' : 'bg-gray-100'}`}>
      <EllipsisVertical width={20} height={20} strokeWidth={1.5}/>
    </button>
  );
}
