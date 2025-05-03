/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogOut } from "lucide-react";
import useDarkMode from "../utils/getTheme";
import useClickOutSide from "../hooks/useClickOutSide";
import { useRef } from "react";
import { useHandleLogOutMutation } from "../redux/sliceApis/auth";
import { useNavigate } from "react-router-dom";

export default function Logout_component({ props }: any) {
  const navigate = useNavigate();
  const ref_Dropdown = useRef(null);
  const isDarkMode = useDarkMode();
  const [dispath] = useHandleLogOutMutation();
  useClickOutSide(ref_Dropdown, () => {
    props?.setStatusDropDown(false);
  });

  const log_out = async () => {
    const result = await dispath();
    if (result?.data?.status === 200) {
      navigate("/sign-in");
    }
  };
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#1C1C1D] text-gray-100"
          : "bg-[#fff] text-gray-900 "
      } absolute shadow-[-2px_2px_20px_rgba(0,0,0,0.25)] p-2 right-0 top-full rounded-lg`}
      ref={ref_Dropdown}
    >
      <button
        className={`${
          isDarkMode
            ? "bg-[#1C1C1D] hover:bg-[#333334] text-gray-100"
            : "bg-[#fff] hover:bg-[#F1F5F9] text-gray-900 "
        } flex items-center gap-x-2 cursor-pointer p-2 rounded-lg duration-200`}
        onClick={log_out}
      >
        <LogOut size={30} className="p-1.5 rounded-full border-2" />
        <span>Logout</span>
      </button>
    </div>
  );
}
