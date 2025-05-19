/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
  useHandleFriendRequestMutation,
  useListFriendRequestQuery,
} from "../../../redux/sliceApis/auth";
import ReloadPage from "../../../components/reloadPage";
import { LoaderCircle } from "lucide-react";
import useDarkMode from "../../../utils/getTheme";

export default function Friends_request() {
  const { data, isLoading, isError } = useListFriendRequestQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const isDarkMode = useDarkMode();
  // trigger friend request
  const [handleFriendRequest, { isLoading: loading_trigger }] =
    useHandleFriendRequestMutation();
  return (
    <div>
      <div className="flex items-center justify-between text-sm font-medium">
        <strong className="opacity-80">Friend Requests</strong>
        <Link to={"/friend-requests"} className="text-[#4183F5]">
          See all
        </Link>
      </div>
      <div className="mt-2 overflow-y-auto max-h-[calc(70vh)] scroll-hover">
        {isLoading && (
          <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
            <LoaderCircle className=" animate-spin" />
          </div>
        )}
        {!loading_trigger &&
          data?.data?.data &&
          data?.data?.data?.map((item: any) => (
            <div className="flex items-center gap-x-3 my-2 p-2">
              {/* avatar */}
              <img
                src={
                  item?.senderId?.picture
                    ? item?.senderId?.picture
                    : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                }
                alt=""
                className="w-13 h-13 rounded-full cursor-pointer"
              />
              {/* name & action */}
              <div className="flex flex-col gap-y-1 text-sm *:hover:opacity-100 *:duration-200">
                <span className="cursor-pointer opacity-80">
                  {item?.senderId?.userName}
                </span>
                <div className="flex items-center gap-x-2">
                  <button
                    className={`rounded bg-[#0866FF] text-gray-100 px-2 py-1 cursor-pointer opacity-80`}
                    type="button"
                    onClick={() =>
                      handleFriendRequest({
                        senderId: item?.senderId?._id,
                        status: "accepted",
                      })
                    }
                  >
                    Accept
                  </button>
                  <button
                    className={`
                      ${
                        isDarkMode
                          ? "bg-[#333334] text-gray-100"
                          : "bg-[#F0F2F5] text-gray-900 "
                      }
                      rounded px-2 py-1 cursor-pointer opacity-80`}
                    type="button"
                    onClick={() =>
                      handleFriendRequest({
                        receiverId: item?._id,
                        status: "rejected",
                      })
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}

        {isError && (
          <div className="flex gap-x-1">
            <span>Lỗi!</span>
            <ReloadPage />
          </div>
        )}
      </div>
      {data?.data?.data && data?.data?.data.length < 1 && (
        <div className="text-sm text-center py-10">No friend requests</div>
      )}
    </div>
  );
}
