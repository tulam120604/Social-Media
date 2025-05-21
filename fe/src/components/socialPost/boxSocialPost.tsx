/* eslint-disable @typescript-eslint/no-explicit-any */
import useDarkMode from "../../utils/getTheme";

export default function BoxSocialPost_component({props} : any) {
  const isDarkMode = useDarkMode();
  console.log(props)
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      }`}
    >
      BoxSocialPost_component
    </div>
  );
}
