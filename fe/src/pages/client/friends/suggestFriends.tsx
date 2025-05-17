import ReloadPage from "../../../components/reloadPage";
import { useListUserQuery } from "../../../redux/sliceApis/auth";
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
  const { data, isLoading, isError } = useListUserQuery();
  console.log(data?.data?.data);
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      }`}
    >
      <span>Gợi ý</span>

      {/* list */}
      <div>
        {data?.data?.data?.map((item: iItem) => (
          <div className="flex items-center gap-x-3 my-4 p-2">
            {/* avatar */}
            <img
              src={
                item?.picture
                  ? item?.picture
                  : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
              }
              alt=""
              className="w-15 h-15 rounded-full cursor-pointer"
            />
            {/* name & action */}
            <div className="flex flex-col gap-y-1">
              <span className="cursor-pointer">{item?.userName}</span>
              <button
                className="rounded bg-[#0866FF] px-2 py-1 cursor-pointer"
                type="button"
              >
                Adds friend
              </button>
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
