import useDarkMode from "../../utils/getTheme";

export default function ListComment_component() {
  const isDarkMode = useDarkMode();
  const data = undefined;
  return (
    <div className="flex gap-x-2">
      {/* avatar */}
      <img
        src={
          data?.data?.data?.picture
            ? data?.data?.data?.picture
            : "https://picsum.photos/320/180"
        }
        alt=""
        className="w-8 h-8 rounded-full border"
      />
      {/* name & comment */}
      <div
        className={`${
          isDarkMode
            ? "bg-[#333334] text-gray-100"
            : "bg-[#F0F2F5] text-gray-900 "
        } flex flex-col gap-y-0.5 rounded-xl px-3 py-2 *:opacity-80`}
      >
        <span>Name</span>
        <span className="text-sm">content</span>
      </div>
    </div>
  );
}
