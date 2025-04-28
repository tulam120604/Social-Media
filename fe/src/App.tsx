import Routes_page from "./router";
import useDarkMode from "./utils/getTheme";
import "./App.css";
import AuthProvider from "./utils/authProvider";

export default function App() {
  const isDarkMode = useDarkMode();
  return (
    <AuthProvider>
      <div
        className={`${
          isDarkMode ? "bg-[#F1F5F9] text-gray-900" : "bg-black text-gray-100"
        } w-full min-h-screen`}
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
    </AuthProvider>
  );
}
