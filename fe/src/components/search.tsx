import { ChevronLeft, Search } from "lucide-react";
import { useState } from "react";

export default function Search_component() {
  const [status_search, setStatus_search] = useState<boolean>(false);
  return (
    <div className="flex items-center">
      {/* desktop */}
      <form className="hidden lg:flex relative items-center rounded-full overflow-hidden">
        <input
          type="text"
          className="w-[35vw] flex justify-end border 
            border-gray-600 rounded-full py-2 px-4 opacity-85 z-[2]"
          placeholder="Search"
        />
        <Search
          color="#333333"
          className="absolute right-0 h-full w-14 p-2 
            bg-gray-50 cursor-pointer z-[-1] border-l border-gray-600"
        />
      </form>

      {/* mobile */}
      <div className="lg:hidden">
        <Search
          color="#333333"
          className="translate-x-[100%] h-full cursor-pointer"
          onClick={() => setStatus_search(!status_search)}
        />
        {status_search && (
          <div className="bg-white fixed w-screen h-screen left-0 top-0 z-[2]">
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
