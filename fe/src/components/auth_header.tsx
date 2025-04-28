import { Bell, MessageCircleMore, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useViewProfileQuery } from "../redux/sliceApis/auth";

export default function Auth_header() {
  const { data, isLoading } = useViewProfileQuery();
  return (
    <div className="hidden lg:block">
      {isLoading && (
        <div className="flex gap-x-4 items-center *:animate-pulse *:bg-gray-100 *:rounded-full *:w-8 *:h-8">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      <div className="flex items-center gap-x-6 *:cursor-pointer opacity-90 *:relative">
        {/* had login */}
        <>
          <button>
            <Users strokeWidth={1.7} size={25} />
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
          </button>
          <button>
            <MessageCircleMore strokeWidth={1.7} size={25} />
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
          </button>
          <button>
            <Bell strokeWidth={1.7} size={25} />
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500" />
          </button>
          <Link to={"/profile"}>
            <img
              src={data?.data?.data?.picture}
              alt=""
              className="rounded-full w-8 h-8"
            />
          </Link>
        </>
      </div>
    </div>
  );
}
