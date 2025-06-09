/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoaderCircle } from "lucide-react";
import ReloadPage from "../../../components/reloadPage";
import {
  useAddFriendMutation,
  useViewFriendSuggestQuery,
} from "../../../redux/sliceApis/auth";
import useDarkMode from "../../../utils/getTheme";
import { Link } from "react-router-dom";
import { useState } from "react";

interface iItem {
  _id: string | number;
  userName: string;
  email: string;
  picture?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export default function SuggestFriends_component() {
  const isDarkMode = useDarkMode();
  const [requestedIds, setRequestedIds] = useState<any[]>([]);
  const { data, isLoading, isError } = useViewFriendSuggestQuery(undefined, {});

  //
  const [handleFriendRequest, { isLoading: loading_trigger }] =
    useAddFriendMutation();

  const handleFriendRequestClick = (receiverId: string | number) => {
    handleFriendRequest({
      receiverId,
      status: "pending",
    });
    setRequestedIds((prev) => [...prev, receiverId]);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      }`}
    >
      <strong className="opacity-80">Suggest</strong>

      {/* list */}
      <div className="overflow-y-auto h-[calc(100vh-140px)] scroll-hover">
        {isLoading && (
          <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
            <LoaderCircle className=" animate-spin" />
          </div>
        )}
        {!isLoading &&
          data?.data?.data &&
          data?.data?.data?.map((item: iItem) => {
            const isRequested = requestedIds.includes(item?._id);
            return (
              <div className="grid grid-cols-[52px_auto] items-center gap-x-3 my-4 p-2">
                {/* avatar */}
                <Link to={`/profile/${item?._id}`}>
                  <img
                    src={
                      item?.picture
                        ? item?.picture
                        : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                    }
                    alt=""
                    className="w-13 h-13 rounded-full cursor-pointer"
                  />
                </Link>
                {/* name & action */}
                <div className="flex flex-col gap-y-1 text-sm *:hover:opacity-100 *:duration-200 w-full">
                  <Link
                    to={`/profile/${item?._id}`}
                    className="cursor-pointer opacity-80"
                  >
                    {item?.userName}
                  </Link>
                  <div>
                    <button
                      className={`${
                        loading_trigger ? "opacity-30" : "opacity-80"
                      } 
                      ${
                        isRequested
                          ? "bg-transparent border"
                          : "bg-[#0866FF] border border-transparent"
                      }
                    rounded w-full py-1 cursor-pointer hover:opacity-100 duration-200`}
                      type="button"
                      disabled={loading_trigger}
                      onClick={() =>
                        !isRequested && handleFriendRequestClick(item?._id)
                      }
                    >
                      {isRequested ? "Requested" : "Follow"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {isError && (
          <div className="flex gap-x-1">
            <span>Lỗi!</span>
            <ReloadPage />
          </div>
        )}
      </div>
    </div>
  );
}
