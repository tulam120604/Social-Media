import { LoaderCircle } from "lucide-react";
import useDarkMode from "../utils/getTheme";

export function Loading_overlay() {
  const isDarkMode = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1C1C1D]" : "bg-[#F1F5F9]"
      } w-screen h-screen fixed top-0 left-0 grid place-content-center`}
    >
      <div
        className="text-[50px] w-14 h-14 grid place-content-center 
      font-semibold font-serif text-[#413B95] border-3 border-[#413B95]
      rounded-lg text-center"
      >
        <span className="select-none">L</span>
      </div>
      <section className="fixed bottom-1 text-center w-screen text-[#413B95]">
        Linksta by Tu Lam
      </section>
    </div>
  );
}

export function Loading_skeleton() {
  const isDarkMode = useDarkMode();
  return (
    <div className="border shadow rounded-lg p-4">
      <div className=" w-full flex justify-between items-start animate-pulse">
        <div className="flex items-center gap-x-2 mb-4">
          <div
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            } w-12 rounded-full h-12`}
          />
          <div>
            <div
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              } h-3 rounded-full w-16 mb-2.5`}
            />{" "}
            <div
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              } h-3 rounded-full w-16`}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        } animate-pulse w-full h-48 rounded-lg mb-5 flex justify-center items-center`}
      >
        <svg
          className="w-8 h-8 stroke-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z"
            stroke="stroke-current"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function Loading_Spinner() {
  return (
    <div className="bg-[#33333366] w-screen h-screen fixed top-0 left-0 grid place-content-center">
      <LoaderCircle className=" animate-spin" />
    </div>
  );
}
