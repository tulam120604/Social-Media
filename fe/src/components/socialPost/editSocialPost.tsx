import { Pencil } from "lucide-react";
import useDarkMode from "../../utils/getTheme";

export default function EditSocialPost_component() {
  const isDarkMode = useDarkMode();
  return (
    <button
      className={`${
        isDarkMode
          ? "hover:bg-[#1C1C1D] text-gray-100"
          : "hover:bg-[#F1F5F9] text-gray-900 "
      } flex items-center gap-x-2 cursor-pointer px-2 py-1 rounded duration-200 w-full h-full`}
    >
      <Pencil size={20} />
      <span className=" whitespace-nowrap"> Edit social post</span>
    </button>
  );
}
