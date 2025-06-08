/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heart, MessageCircle } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import { useState } from "react";
import Comment_component from "./comment";
import { useMutateLikeMutation } from "../../redux/sliceApis/post";

export default function LikeSocialPost_component({ props }: any) {
  const isDarkMode = useDarkMode();
  const [comment, setComment] = useState(false);
  const [addLike] = useMutateLikeMutation();
  async function handleMutateLike(status: string) {
    try {
      await addLike({
        idPost: props?._id,
        status,
        action: "add_or_remove_like",
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* interact */}
      <div
        className="flex gap-x-4 items-center *:flex *:items-center 
        border-t border-gray-500 py-2 *:duration-150"
      >
        {/* like = false */}
        {!props?.statusLike && (
          <div>
            <button
              type="button"
              onClick={() => handleMutateLike("like")}
              className={`${
                isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
              } opacity-70 p-1 cursor-pointer rounded`}
            >
              <Heart />
            </button>
            <span>
              {typeof props?.like_count === "number" &&
                props?.like_count > 0 &&
                props?.like_count}
            </span>
          </div>
        )}
        {/* like = true */}
        {props?.statusLike && (
          <div>
            <button
              type="button"
              onClick={() => handleMutateLike("unLike")}
              className={`${
                isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
              } opacity-70 p-1 cursor-pointer rounded`}
            >
              <Heart color="#FF3040" fill="#FF3040" />
            </button>
            <span>
              {typeof props?.like_count === "number" &&
                props?.like_count > 0 &&
                props?.like_count}
            </span>
          </div>
        )}

        <div>
          <div
            className={`${
              isDarkMode ? "hover:bg-[#333334]" : "hover:bg-[#F0F2F5]"
            } opacity-70 p-1 cursor-pointer rounded`}
            onClick={() => setComment((pre) => !pre)}
          >
            <MessageCircle />
          </div>
          {typeof props?.comment_count === "number" &&
            props?.comment_count > 0 && <span>{props?.comment_count}</span>}
        </div>
      </div>
      {(comment || props?.comment_count > 0) && (
        <Comment_component idPost={props?._id} />
      )}
    </>
  );
}
