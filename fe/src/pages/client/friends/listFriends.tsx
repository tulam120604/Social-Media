/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoaderCircle } from "lucide-react";
import Box_user_component from "../../../components/box_user";
import { useListFriendQuery } from "../../../redux/sliceApis/auth";
import useDarkMode from "../../../utils/getTheme";
import ReloadPage from "../../../components/reloadPage";

export default function ListFriends_component() {
  const isDarkMode = useDarkMode();

  const { data, isLoading, isError } = useListFriendQuery(undefined, {});
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      }`}
    >
      <strong className="opacity-80">Friend list</strong>

      {/* list */}
      <div className="h-[calc(100%-140px)] w-full mt-8">
        {isLoading && (
          <div className="grid place-content-center h-full">
            <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
              <LoaderCircle className=" animate-spin" />
            </div>
          </div>
        )}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 *:w-full 
        w-full justify-between gap-x-4"
        >
          {!isLoading && data?.data?.data && data?.data?.data?.length > 0 ? (
            data?.data?.data?.map((item: any) => (
              <Box_user_component props={item} />
            ))
          ) : (
            <span className="text-sm">No friends!</span>
          )}
        </div>
        {/* <span className="text-sm">No friends!</span> */}
      </div>
      {isError && (
        <div className="flex gap-x-1">
          <span>Lỗi!</span>
          <ReloadPage />
        </div>
      )}
    </div>
  );
}
