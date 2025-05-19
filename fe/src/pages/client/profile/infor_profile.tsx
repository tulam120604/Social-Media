import useDarkMode from "../../../utils/getTheme";

export default function Infor_profile() {
  const isDarkMode = useDarkMode();
  return (
    <div className="w-full relative">
      {/* background */}
      <div
        className={`${
          isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
        } rounded w-full h-[250px]`}
      >
        {/* avatar */}
        <img
          src={"https://picsum.photos/320/180"}
          alt=""
          className="rounded-full w-[100px] h-[100px] object-cover border"
        />
      </div>
    </div>
  );
}
