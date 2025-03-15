/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { link_menu } from "../config/links";
import { useAppDispath, useAppSelector } from "../hooks/redux";
import { updateValueActiveMenu } from "../redux/slices/menuSlice";

interface iLinkMenu {
  name: string;
  catalog: string;
}

export default function Menu_component() {
  const { activeMenu } = useAppSelector((value) => value?.activeMenuStore);
  const dispath = useAppDispath();
  console.log(activeMenu);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: any) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e: any) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = x - startX; // Tăng tốc độ kéo (multiplier là 2)
    e.currentTarget.scrollLeft = scrollLeft - walk; // Cuộn menu ngang
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };
  return (
    <div
      className="flex gap-x-3 items-center overflow-x-auto hidden-scroll cursor-pointer duration-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {link_menu?.map((item: iLinkMenu, i: number) => (
        <button
          key={i}
          type="button"
          className={`${
            activeMenu === item?.catalog
              ? "bg-black text-gray-100"
              : "bg-[#e5e7eb90] hover:bg-gray-300"
          } border-transparent whitespace-nowrap rounded p-1 opacity-85 duration-200 cursor-pointer`}
          onClick={() => dispath(updateValueActiveMenu(item?.catalog))}
        >
          {item?.name}
        </button>
      ))}
    </div>
  );
}
