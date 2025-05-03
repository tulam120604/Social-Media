import { ChevronLeft, Search } from "lucide-react";
import { useState } from "react";
import useDarkMode from "../utils/getTheme";

export default function Search_component() {
  const [status_search, setStatus_search] = useState<boolean>(false);
  const isDarkMode = useDarkMode();
  return (
    <div className="flex items-center">
      {/* desktop */}
      <form className="hidden lg:flex relative items-center overflow-hidden">
        <input
          type="text"
          className={`${
            isDarkMode
              ? "bg-[#333334] text-gray-100"
              : "bg-[#F0F2F5] text-gray-900 "
          } w-[350px] flex justify-end border-transparent rounded-full py-2 
          px-4 z-[2] outline-0`}
          placeholder="Search"
        />
      </form>

      {/* mobile */}
      <div className="lg:hidden">
        <Search
          color="#333333"
          className="h-full cursor-pointer"
          onClick={() => setStatus_search(!status_search)}
        />
        {status_search && (
          <div className="bg-white fixed w-screen h-screen left-0 top-0 z-[2] px-4">
            <form
              className="grid grid-cols-[50px_auto] py-2 
           px-4 mx-auto items-center overflow-hidden"
            >
              <ChevronLeft
                className="w-10 h-full border border-transparent p-1 rounded-full 
             active:border-gray-400 duration-200 cursor-pointer hover:bg-gray-100"
                strokeWidth={1.5}
                onClick={() => setStatus_search(!status_search)}
              />
              <input
                type="text"
                className="flex justify-end border bg-transparent 
               border-gray-600 rounded-full py-2 px-4 opacity-85 z-[2]"
                placeholder="Search"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
