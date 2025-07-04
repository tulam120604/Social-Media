import { Link } from "react-router-dom";
import Btn_Create_Story from "./button/btn_add_story";

export default function Story_component() {
  return (
    <>
      <div className="flex gap-x-3 items-center overflow-x-auto hidden-scroll *:cursor-pointer 
      text-center scroll-hover-x h-full">
        <Btn_Create_Story/>
        {Array.from({ length: 20 }, () => (
          <Link to={"/stories"}>
            <div className="relative w-20">
              <img
                src="https://picsum.photos/320/180"
                alt=""
                className="rounded-full w-16 h-16 mx-auto border"
              />
            </div>
            <span className="text-xs opacity-80 font-medium line-clamp-2 mt-2">
              Add a Story
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
