import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Story_component() {
  return (
    <>
      <div className="flex gap-x-3 items-center overflow-x-auto hidden-scroll *:cursor-pointer text-center">
        <button>
          <div className="relative w-20">
            <img
              src="https://picsum.photos/320/180"
              alt=""
              className="rounded-full w-16 h-16 mx-auto"
            />
            <Plus
              strokeWidth={2}
              size={25}
              color="#fff"
              className="absolute top-1/2 left-1/2 -translate-1/2 opacity-80"
            />
          </div>
          <span className="text-xs opacity-80 font-medium line-clamp-2 mt-2">
            Add a Story
          </span>
        </button>
        {Array.from({ length: 20 }, () => (
          <Link to={"/stories"}>
            <div className="relative w-20">
              <img
                src="https://picsum.photos/320/180"
                alt=""
                className="rounded-full w-16 h-16 mx-auto"
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
