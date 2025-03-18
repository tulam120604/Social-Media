import { CircleUserRound, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login_button() {
  return (
    <div className="flex items-center gap-x-2">
        <button className="cursor-pointer border border-transparent rounded-full h-full p-1.5 
        relative group active:border-gray-400 duration-200">
            <EllipsisVertical color="#333333" fill="#333333"/>
            <span className="text-xs absolute -bottom-full left-0 bg-gray-100 px-2 py-1 rounded 
            whitespace-nowrap hidden group-hover:block">Cài đặt</span>
        </button>
      <Link
        to={"/sign-in"}
        className="flex gap-x-1 items-center rounded-full border border-gray-600 px-2 py-1.5"
      >
        <CircleUserRound strokeWidth={1.5} />
        <span>Sign in</span>
      </Link>
    </div>
  );
}
