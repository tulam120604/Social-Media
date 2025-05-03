import { FileVideo, ImageUp } from "lucide-react";
import useDarkMode from "../../../utils/getTheme";

export default function Post_status() {
  const isDarkMode = useDarkMode();
  return (
    <div className="flex gap-x-4 items-start">
      <img
        src="https://picsum.photos/320/180"
        alt=""
        className="w-12 h-12 rounded-full"
      />
      {/* form post status & type*/}
      <form className="w-full space-y-2">
        <input
          type="text"
          placeholder="What's on your mind?"
          className={`${
            isDarkMode
              ? "bg-[#333334] text-gray-100"
              : "bg-[#F0F2F5] text-gray-900 "
          } w-full px-2 pt-3 pb-10 rounded opacity-80`}
        />
        <div className="flex justify-between">
          <div
            className={`${
              isDarkMode
                ? "*:hover:bg-[#333334] text-gray-100"
                : "*:hover:bg-[#F0F2F5] text-gray-900 "
            } flex gap-x-4 items-center *:flex *:items-center **:gap-x-1 
            *:text-sm *:opacity-75 *:cursor-pointer *:p-1 **:rounded *:duration-200`}
          >
            {/* image */}
            <button type="button">
              <ImageUp strokeWidth={1.88} size={18} />
              <span>Photo</span>
            </button>
            {/* video */}
            <button type="button">
              <FileVideo strokeWidth={1.88} size={18} />
              <span>Video</span>
            </button>
          </div>
          <button
            className="px-2 py-1.5 bg-[#4183F5] text-gray-50 rounded 
            text-sm cursor-pointer"
          >
            Send
          </button>
        </div>
        {/* type */}
      </form>
    </div>
  );
}
