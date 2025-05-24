/* eslint-disable @typescript-eslint/no-explicit-any */
import useDarkMode from "../../utils/getTheme";
import { formatRelativeTime } from "../../utils/formatTime";
import { Dot } from "lucide-react";
import InteractSocialPost_component from "../interact/interactSocialPost";

export default function BoxSocialPost_component({ props }: any) {
  const isDarkMode = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#252728] text-gray-100" : "bg-[#fff] text-gray-900 "
      } space-y-2 py-4`}
    >
      {/* user */}
      <div className="flex gap-x-2 px-4">
        <img
          src={
            props?.id_account?.picture
              ? props?.id_account?.picture
              : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
          }
          alt=""
          className="w-10 h-10 rounded-full cursor-pointer border"
        />
        <div className="flex flex-col opacity-80">
          <span>{props?.id_account?.userName}</span>
          {/* time & status */}
          <div className="flex items-center">
            <span className="text-xs">
              {formatRelativeTime(props?.createdAt)}
            </span>
            <Dot />
            <span className="text-xs capitalize">{props?.status}</span>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="px-4">
        <p className="opacity-90 whitespace-pre-line">{props?.content}</p>
      </div>
      {/* image (any) */}
      {props?.media_urls?.length > 0 &&
        props?.media_urls?.map((uri: string) => (
          <div className="grid place-content-center bg-transparent">
            <img
              src={uri}
              alt=""
              className="w-full h-full max-h-[500px] cursor-pointer"
            />
          </div>
        ))}

      {/* interact & comment */}
      <div className="px-4">
        <InteractSocialPost_component />
      </div>
    </div>
  );
}
