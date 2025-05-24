import Post_status from "../../../components/socialPost/create_socialPost";
import useDarkMode from "../../../utils/getTheme";
import Infor_profile from "./infor_profile";
import ListMyPost_component from "./list_my_post";

export default function Profile_page() {
  const isDarkMode = useDarkMode();
  return (
    <div className="w-full h-full space-y-2">
      <Infor_profile />

      <div className="w-full h-full flex justify-between gap-x-4">
        <div className="w-full space-y-4">
          <div
            className={`${
              isDarkMode
                ? "bg-[#252728] text-gray-100"
                : "bg-[#fff] text-gray-900 "
            } p-4 rounded`}
          >
            <Post_status />
          </div>
          <ListMyPost_component />
        </div>
        <div>
          <div
            className={`${
              isDarkMode
                ? "*:bg-[#252728] text-gray-100"
                : "*:bg-[#fff] text-gray-900 "
            } hidden lg:block space-y-4 w-[300px]`}
          >
            {/* <ListMyPost_component /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
