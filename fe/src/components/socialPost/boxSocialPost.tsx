/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatRelativeTime } from "../../utils/formatTime";
import { Dot, Ellipsis } from "lucide-react";
import { useRef, useState } from "react";
import DeleteSocialPost_component from "./deleteSocialPost";
import EditSocialPost_component from "./editSocialPost";
import useClickOutSide from "../../hooks/useClickOutSide";
import LikeSocialPost_component from "../interact/likeSocialPost";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BoxSocialPost_component({ props }: any) {
  const [statusPopup, setStatusPopup] = useState<boolean>(false);
  const ref_Popup = useRef(null);
  useClickOutSide(ref_Popup, () => {
    setStatusPopup(false);
  });

  // responsive for carousel
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="space-y-2 py-4 dark:bg-[#0B1117] dark:text-gray-100 bg-[#fff] text-gray-900">
      {/* user */}
      <div className="flex justify-between px-4">
        <div className="flex gap-x-2">
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

        {/* option nếu bài viết của chính mình */}
        {props?.isOwner && (
          <div className="relative" ref={ref_Popup}>
            <button
              className="dark:hover:bg-[#303132] dark:text-gray-100 cursor-pointer 
              hover:bg-[#dbdbdb] text-gray-900 duration-200 rounded-full p-1.5"
              onClick={() => setStatusPopup((pre) => !pre)}
            >
              <Ellipsis />
            </button>

            {/* popup */}
            {statusPopup && (
              <div
                className="absolute shadow-[-2px_2px_20px_rgba(0,0,0,0.25)] 
                p-3 right-0 top-full rounded-lg z-10 bg-[#fff] text-gray-900 
                dark:bg-[#333334] dark:text-gray-100"
              >
                <EditSocialPost_component Post={props} />
                <DeleteSocialPost_component idPost={props?._id} />
              </div>
            )}
          </div>
        )}
      </div>
      {/* image (any) */}
      <Carousel responsive={responsive}>
        {props?.media_urls?.length > 0 &&
          props?.media_urls?.map((uri: string) => (
            <div className="border border-gray-300 dark:border-gray-700 rounded w-full grid place-content-center bg-transparent">
              <img
                src={uri}
                alt=""
                className="w-full h-full max-h-[1000px] cursor-pointer"
              />
            </div>
          ))}
      </Carousel>
      {/* content */}
      <div className="px-4">
        <p className="opacity-90 whitespace-pre-line">{props?.content}</p>
      </div>
      {/* interact & comment */}
      <div className="px-4">
        <LikeSocialPost_component props={props} />
      </div>
    </div>
  );
}
