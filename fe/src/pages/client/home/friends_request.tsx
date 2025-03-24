import { CircleCheck, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Friends_request() {
  return (
    <div>
      <div className="flex items-center justify-between text-sm font-medium">
        <strong className="opacity-80">Friend Requests</strong>
        <Link to={"/friend-requests"} className="text-[#4183F5]">
          See all
        </Link>
      </div>
      <div className="mt-2">
        {Array.from({ length: 2 }, (_, i: number) => (
          <div key={i} className="flex items-center my-3 justify-between">
            <Link to={"/name"} className="flex items-center gap-x-3">
              <img
                className="rounded-full w-8 h-8"
                src="https://picsum.photos/320/180"
                alt=""
              />
              <span className="opacity-80 text-sm">Name</span>
            </Link>
            {/* options */}
            <div className="flex items-center gap-x-2 *:cursor-pointer">
              <button>
                <CircleCheck fill="#4183F5" color="#fff" size={22}/>
              </button>
              <button className="hover:bg-[#F1F5F9] rounded-full duration-200">
                <X size={20} className="p-0.5 opacity-80"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
