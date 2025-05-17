import useDarkMode from "../../../utils/getTheme";

export default function ListFriends_component() {
  const isDarkMode = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#252728] text-gray-100"
          : "bg-[#fff] text-gray-900 "
      }`}
    >
      <span>Danh sách bạn bè</span>

      {/* list */}
      <div className="grid place-content-center h-[calc(100%-10px)]">
         <span>Chưa có bạn bè nào!</span>
      </div>
    </div>
  );
}
