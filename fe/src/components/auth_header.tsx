import { Bell, CircleUserRound, MessageCircleMore, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth_header() {
  return (
    <div className="flex items-center gap-x-6 *:cursor-pointer">
      {/* not login */}
      <Link
        to={"/sign-in"}
        className="flex gap-x-1 items-center rounded-full border border-gray-600 px-2 py-1.5"
      >
        <CircleUserRound strokeWidth={1.5} />
        <span>Sign in</span>
      </Link>
      {/* had login */}
      {/* <>
        <button>
          <Users strokeWidth={1.7} size={20} />
        </button>
        <button>
          <MessageCircleMore strokeWidth={1.7} size={20} />
        </button>
        <button>
          <Bell strokeWidth={1.7} size={20} />
        </button>
        <Link to={"/profile"}>
          <img
            src="https://picsum.photos/320/180"
            alt=""
            className="rounded-full w-8 h-8"
          />
        </Link>
      </> */}
    </div>
  );
}
