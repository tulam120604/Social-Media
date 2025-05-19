import { Link } from "react-router-dom";
import useDarkMode from "../utils/getTheme";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import ReloadPage from "./reloadPage";
import { LoaderCircle } from "lucide-react";

export default function Box_profile_component() {
  const isDarkMode = useDarkMode();
  const { data, isLoading, isError } = useViewProfileQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      } rounded p-4`}
    >
      {/* background & avatar*/}
      {isLoading && (
        <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
          <LoaderCircle className=" animate-spin" />
        </div>
      )}
      {data?.data?.data && (
        <>
          <div className="relative">
            {/* background */}
            <img
              src="https://picsum.photos/320/180"
              alt=""
              className="rounded w-full h-16 object-cover"
            />
            {/* avatar */}
            <img
              src={
                data?.data?.data?.picture
                  ? data?.data?.data?.data?.data?.data?.userName
                  : "https://picsum.photos/320/180"
              }
              alt=""
              className="rounded-full w-10 h-10 object-cover border absolute bottom-0 left-1/2 
        -translate-x-1/2 translate-y-1/2"
            />
          </div>

          <div className="flex flex-col gap-y-1 mt-5 items-center">
            {/* name */}
            <strong className="opacity-90">{data?.data?.data?.userName}</strong>
            {/* count follow */}
            <span className="text-xs opacity-75">12k followers</span>
            {/* link */}
            <Link
              to={"/profile/123"}
              className="bg-[#3A84F5] px-2 py-1 text-sm text-gray-100 rounded 
        font-light"
            >
              Profile
            </Link>
          </div>
        </>
      )}
      {isError && (
        <div className="flex gap-x-1">
          <span>Lỗi!</span>
          <ReloadPage />
        </div>
      )}
    </div>
  );
}
