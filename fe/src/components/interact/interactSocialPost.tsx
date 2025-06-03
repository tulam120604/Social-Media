/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, ThumbsUp } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import { useState } from "react";
import Comment_component from "./comment";
import { useAddInteractMutation } from "../../redux/sliceApis/post";

export default function InteractSocialPost_component({ props }: any) {
  const isDarkMode = useDarkMode();
  const [comment, setComment] = useState(false);
  const [addInteract] = useAddInteractMutation();
  async function handleAddInteract(status: string) {
    try {
      await addInteract({
        idPost: props?._id,
        status,
        action: "add_interact",
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* list interact*/}
      <div className="w-full flex justify-between *:opacity-80 text-sm py-2">
        <span>
          {typeof props?.interact_count === "number" &&
            props?.interact_count > 0 &&
            props?.interact_count}
        </span>
        {typeof props?.comment_count === "number" &&
          props?.comment_count > 0 && (
            <button
              className="flex items-center gap-x-1 cursor-pointer"
              onClick={() => setComment(true)}
            >
              {props?.comment_count}
              <MessageCircle
                fill="#333334"
                color="#333334"
                size={18}
                className="-rotate-90"
              />
            </button>
          )}
      </div>

      {/* interact */}
      <div
        className="flex items-center *:flex *:items-center *:cursor-pointer *:gap-x-2 justify-around 
    border-t py-2 *:rounded *:duration-150 *:py-2 *:px-10"
      >
        {/* interact */}
        <button
          type="button"
          onClick={() => handleAddInteract("like")}
          className={`${
            isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
          } opacity-70 relative group`}
        >
          <ThumbsUp />
          <span>Like</span>
          <div
            className={`${
              isDarkMode ? "bg-[#191919]" : "bg-[#ebeaea]"
            } absolute group-hover:visible invisible flex -top-full p-1 items-center gap-x-2 
        *:cursor-pointer *:text-3xl *:duration-150 rounded-full left-0 duration-200 delay-1000 scale-0 group-hover:scale-100`}
          >
            {[
              { emoji: "👍", status: "like" },
              { emoji: "😂", status: "laugh" },
              { emoji: "😢", status: "sad" },
              { emoji: "😲", status: "wow" },
              { emoji: "😠", status: "wrath" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleAddInteract(item.status)}
                className="hover:scale-130"
              >
                {item.emoji}
              </button>
            ))}
          </div>
        </button>
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
      {(comment || props?.comment_count > 0) && (
        <Comment_component idPost={props?._id} />
      )}
    </>
  );
}
