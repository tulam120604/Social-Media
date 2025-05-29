/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, ThumbsUp } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import { useState } from "react";
import Comment_component from "./comment";

export default function InteractSocialPost_component({ props }: any) {
  console.log(props);
  const isDarkMode = useDarkMode();
  const [statusInteract, setStatusInteract] = useState("like");
  const [comment, setComment] = useState(false);
  return (
    <>
      {/* list interact*/}
      <div className="w-full flex justify-between *:opacity-80 text-sm py-2">
        <span>{props?.interact_count}</span>
        <div className="flex items-center gap-x-1">
          {props?.comment_count}
          <MessageCircle
            fill="#333334"
            color="#333334"
            size={18}
            className="-rotate-90"
          />
        </div>
      </div>

      {/* interact */}
      <div
        className="flex items-center *:flex *:items-center *:cursor-pointer *:gap-x-2 justify-around 
    border-t py-2 *:rounded *:duration-150 *:py-2 *:px-10"
      >
        {/* interact */}
        <div
          className={`${
            isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
          } opacity-70 relative group`}
        >
          <ThumbsUp />
          <span>Like</span>
          <div
            className={`${
              isDarkMode ? "bg-[#191919]" : "bg-[#ebeaea]"
            } absolute group-hover:visible invisible flex -top-full py-2 px-1 items-center gap-x-2 
        *:cursor-pointer *:text-3xl *:duration-150 rounded left-0 duration-200 delay-1000 scale-0 group-hover:scale-100`}
          >
            <button className="hover:scale-110">👍</button>
            <button className="hover:scale-110">😂</button>
            <button className="hover:scale-110">😢</button>
            <button className="hover:scale-110">😲</button>
            <button className="hover:scale-110">😠</button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
          } opacity-70`}
          onClick={() => setComment((pre) => !pre)}
        >
          <MessageCircle />
          <span>Comment</span>
        </div>
      </div>
      {comment && <Comment_component idPost={props?._id} />}
    </>
  );
}
