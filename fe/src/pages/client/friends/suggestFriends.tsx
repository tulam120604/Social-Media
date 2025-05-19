import { LoaderCircle } from "lucide-react";
import ReloadPage from "../../../components/reloadPage";
import {
  useAddFriendMutation,
  useViewFriendSuggestQuery,
} from "../../../redux/sliceApis/auth";
import useDarkMode from "../../../utils/getTheme";

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
  const { data, isLoading, isError } = useViewFriendSuggestQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  //
  const [handleFriendRequest, { isLoading: loading_trigger }] =
    useAddFriendMutation();

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
          !loading_trigger &&
          data?.data?.data &&
          data?.data?.data?.map((item: iItem) => (
            <div className="flex items-center gap-x-3 my-4 p-2">
              {/* avatar */}
              <img
                src={
                  item?.picture
                    ? item?.picture
                    : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                }
                alt=""
                className="w-13 h-13 rounded-full cursor-pointer"
              />
              {/* name & action */}
              <div className="flex flex-col gap-y-1 text-sm *:hover:opacity-100 *:duration-200 w-full">
                <span className="cursor-pointer opacity-80">
                  {item?.userName}
                </span>
                <div>
                  <button
                    className="rounded bg-[#0866FF] w-full py-1 cursor-pointer opacity-80 hover:opacity-100 duration-200"
                    type="button"
                    onClick={() =>
                      handleFriendRequest({
                        receiverId: item?._id,
                        status: "pending",
                      })
                    }
                  >
                    Follow
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
    </div>
  );
}
