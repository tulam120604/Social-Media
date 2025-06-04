/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageCircle, ThumbsUp } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import { useState } from "react";
import Comment_component from "./comment";
import { useAddLikeMutation } from "../../redux/sliceApis/post";

export default function LikeSocialPost_component({ props }: any) {
  const isDarkMode = useDarkMode();
  const [comment, setComment] = useState(false);
  const [addLike] = useAddLikeMutation();
  async function handleAddLike(status: string) {
    try {
      await addLike({
        idPost: props?._id,
        status,
        action: "add_like",
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* list like*/}
      <div className="w-full flex justify-between *:opacity-80 text-sm py-2">
        <span>
          {typeof props?.like_count === "number" &&
            props?.like_count > 0 &&
            props?.like_count}
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
          onClick={() => handleAddLike("like")}
          className={`${
            isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
          } opacity-70 relative group`}
        >
          <ThumbsUp />
          <span>Like</span>
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
