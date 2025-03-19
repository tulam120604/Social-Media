import { ThumbsUp } from "lucide-react";
import useDarkMode from "../utils/getTheme";

export default function Button_like() {
    const isDarkMode = useDarkMode();
  return (
    <button className={`${isDarkMode ? 'bg-gray-100' : 'bg-[#292827]'} flex items-center gap-1.5 text-sm`}>
      <ThumbsUp width={20} height={20} strokeWidth={1.5}/>
      <span className="font-medium">{789}</span>
    </button>
  );
}
