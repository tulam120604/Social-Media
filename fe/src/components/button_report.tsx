import { MessageSquareWarning } from "lucide-react";
import useDarkMode from "../utils/getTheme";

export default function Button_report() {
    const isDarkMode = useDarkMode();
  return (
    <button className={`${isDarkMode ? 'bg-gray-100' : 'bg-[#292827]'} flex items-center gap-1.5 text-sm`}>
      <MessageSquareWarning width={20} height={20} strokeWidth={1.5}/>
      <span className="font-medium">Report</span>
    </button>
  );
}
