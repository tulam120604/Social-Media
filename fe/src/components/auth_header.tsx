import { Bell, CircleUserRound, MessageCircleMore, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useViewProfileQuery } from "../redux/sliceApis/auth";

export default function Auth_header() {
  const { data, isLoading, isError } = useViewProfileQuery();
  return (
    <>
      {isLoading && (
        <div className="flex gap-x-4 items-center *:animate-pulse *:bg-gray-100 *:rounded-full *:w-8 *:h-8">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      {!isLoading && !isError && (
        <div className="flex items-center gap-x-6 *:cursor-pointer opacity-90">
          {/* not login */}
          {data?.error && (
            <Link
              to={"/sign-in"}
              className="flex gap-x-1 items-center rounded-full border border-gray-600 px-2 py-1.5"
            >
              <CircleUserRound strokeWidth={1.5} />
              <span>Sign in</span>
            </Link>
          )}

          {/* had login */}
          {!data?.error && (
            <>
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
                  src={data?.data?.picture}
                  alt=""
                  className="rounded-full w-8 h-8"
                />
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
