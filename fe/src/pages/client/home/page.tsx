import Story_component from "../../../components/story";
import useDarkMode from "../../../utils/getTheme";
import Brithdays from "./brithdays";
import Friends_request from "./friends_request";
import Post_status from "./post_status";

export default function Home_page() {
  const isDarkMode = useDarkMode();
  return (
    <div className="w-full max-w-screen overflow-x-auto grid lg:grid-cols-[calc(100%-370px)_350px] justify-between">
      <div
        className={`${
          isDarkMode
            ? "*:bg-[#252728] text-gray-100"
            : "*:bg-[#fff] text-gray-900 "
        } max-w-[95vw] flex flex-col gap-y-4 *:p-4 *:rounded *:shadow-lg`}
      >
        <Story_component />
        <Post_status />
      </div>
      {/* :desktop - brith day & friend */}
      <div
        className={`${
          isDarkMode
            ? "*:bg-[#252728] text-gray-100"
            : "*:bg-[#fff] text-gray-900 "
        } hidden lg:block space-y-4 *:p-4 *:rounded *:shadow-lg sticky top-0`}
      >
        <Friends_request />
        <Brithdays />
      </div>
    </div>
  );
}
