import useDarkMode from "../utils/getTheme";

export default function Button_subscribe() {
  const isDarkMode = useDarkMode();
  return (
    <button
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } rounded-full px-4 py-2 cursor-pointer text-sm hover:opacity-80 duration-200`}
    >
      Subscribe
    </button>
  );
}
