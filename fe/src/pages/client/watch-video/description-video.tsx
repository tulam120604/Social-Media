import { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../../../utils/getTheme";

export default function Description_video() {
  const [show, setShow] = useState<boolean>(false);
  const isDarkMode = useDarkMode();
  const formattedDescription = "dataProps?.data?.des_product".replace(
    /\n/g,
    "<br />"
  );
  return (
    <div
      className={`${isDarkMode ? "bg-gray-100" : "bg-[#282828]"} 
    rounded-xl p-3 overflow-hidden font-medium opacity-90 space-y-1`}
    >
      <div className="flex items-center gap-x-2 text-sm">
        {/* view */}
        <span>18,201,895 views</span>
        {/* date */}
        <span>Premiered Oct 26, 2022</span>
        {/* hastag */}
        <Link to={""} className="text-blue-500 opacity-85">
          Hastag
        </Link>
      </div>
      {!show && (
        <span className="line-clamp-1 text-sm">
          Series Ăn Cơm Cùng Doraemon #86 | Xé "tập mù" xem hôm nay Doraemon
          mang gì đến nè!
        </span>
      )}
      {show && (
        <div
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
          className="show_description text-sm"
        />
      )}

      <button onClick={() => setShow(!show)}
      className="text-sm cursor-pointer" >{show ? "Show less" : "more"}</button>
    </div>
  );
}
