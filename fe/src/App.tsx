import Routes_page from "./router";
import useDarkMode from "./utils/getTheme";
import './App.css'

export default function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode ? "bg-white text-gray-900" : "bg-black text-gray-100"
      } w-full h-full`}
    >
      <style>
        {`
          input::placeholder {
            color: ${
              isDarkMode ? "#bbb" : "#888"
            }; /* Điều chỉnh màu của placeholder input */
          }
        `}
      </style>
      <Routes_page />
    </div>
  );
}
