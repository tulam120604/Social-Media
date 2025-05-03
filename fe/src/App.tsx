import Routes_page from "./router";
import useDarkMode from "./utils/getTheme";
import "./App.css";

export default function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1C1C1D] text-gray-100" : "bg-[#F1F5F9] text-gray-900 "
      } w-full min-h-screen`}
    >
      <style>
        {`
          input::placeholder {
            color: ${
              isDarkMode ? "#888" : "#bbb"
            }; /* Điều chỉnh màu của placeholder input */
          }
        `}
      </style>
      <Routes_page />
    </div>
  );
}
