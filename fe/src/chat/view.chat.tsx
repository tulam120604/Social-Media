/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoaderCircle } from "lucide-react";
import { useListFriendQuery } from "../redux/sliceApis/auth";
import ReloadPage from "../components/reloadPage";


export default function Chat_component() {
  const { data, isLoading, isError } = useListFriendQuery(undefined, {
    refetchOnReconnect: true,
  });
  console.log(data?.data?.data);

  if (isLoading) {
    return (
      <div className="grid place-content-center gap-x-3 p-2 w-full h-20">
        <LoaderCircle className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex gap-x-1">
        <span>Lỗi!</span>
        <ReloadPage />
      </div>
    );
  }

  return (
    <div>
      <strong className="opacity-80 text-sm">Contacts</strong>

      {!isLoading &&
        data?.data?.data &&
        data?.data?.data?.map((item: any) => (
          <div className="grid grid-cols-[40px_auto] items-center my-4 p-2">
            {/* avatar */}
            <span>
              <img
                src={
                  item?.picture
                    ? item?.picture
                    : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                }
                alt=""
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </span>
            {/* name & action */}
            <div className="flex flex-col gap-y-1 text-sm *:hover:opacity-100 *:duration-200 w-full">
              <span className="cursor-pointer opacity-80">
                {item?.friendId?.userName}
              </span>
            </div>
          </div>
        ))}
      {data?.data?.data && data?.data?.data.length < 1 && (
        <div className="text-sm text-center py-5">No messenger</div>
      )}
    </div>
  );
}
