/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";
import useDarkMode from "../utils/getTheme";
import { useRemoveFriendMutation } from "../redux/sliceApis/auth";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Box_user_component({ props }: any) {
  const isDarkMode = useDarkMode();
  const matchEmail = (text: string | undefined) => {
    const match = text?.match(/(@[^.]+)\./);
    if (match) {
      const result = match[1];
      return result;
    }
    return undefined;
  };
  const [removeFriend, { isLoading }] = useRemoveFriendMutation();
  return (
    <div
      className={`${
        isDarkMode
          ? "border-[#383A3B] text-gray-100"
          : "border-[#d3d6d9] text-gray-900 "
      } border rounded grid place-content-center`}
    >
      <div className="flex flex-col items-center space-y-2 py-10">
        <Link to={`/profile/${props?.friendId?._id}`}>
          <img
            src={
              props?.picture
                ? props?.picture
                : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
            }
            alt=""
            className="w-13 h-13 rounded-full cursor-pointer"
          />
        </Link>
        <Link to={`/profile/${props?.friendId?._id}`}>
          {props?.friendId?.userName}
        </Link>
        <span className="opacity-70 text-sm -mt-2">
          {matchEmail(props?.friendId?.email)}
        </span>
        <div className="flex items-center space-x-4">
          <button
            className={`rounded bg-[#0866FF] text-gray-100 px-4 py-1.5 cursor-pointer 
            opacity-90 hover:opacity-100 duration-200 text-sm`}
            type="button"
            //   onClick={() =>
            //     handleFriendRequest({
            //       senderId: item?.senderId?._id,
            //       status: "accepted",
            //     })
            //   }
          >
            <span>Chat</span>
          </button>

          <button
            className={`
        ${
          isDarkMode
            ? "bg-[#333334] text-gray-100"
            : "bg-[#F0F2F5] text-gray-900 "
        }
        ${isLoading ? "opacity-30" : "opacity-80"}
        rounded px-2 py-1.5 cursor-pointer text-sm`}
            type="button"
            onClick={() =>
              removeFriend({
                receiverId: props?.friendId?._id,
              })
            }
            disabled={isLoading}
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
}
