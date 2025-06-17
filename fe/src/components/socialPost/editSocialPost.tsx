/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pencil } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../lib/ui/select";
import { useState } from "react";

export default function EditSocialPost_component({ Post }: { Post: any }) {
  const isDarkMode = useDarkMode();

  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(Post?.status ?? "Public");

  console.log(Post);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((pre) => !pre)}
        className={`${
          isDarkMode
            ? "hover:bg-[#1C1C1D] text-gray-100"
            : "hover:bg-[#F1F5F9] text-gray-900 "
        } flex items-center gap-x-2 cursor-pointer px-2 py-1 rounded duration-200 w-full h-full`}
      >
        <Pencil size={20} />
        <span className="whitespace-nowrap">Edit social post</span>
      </button>

      {/* box edit */}
      {open && (
        <div
          className={`${
            isDarkMode
              ? "bg-[#333334] text-gray-100"
              : "bg-[#fff] text-gray-900 "
          } 
        max-w-lg w-full mx-auto mt-10 rounded-xl p-4 fixed top-1/2 left-1/2 
        -translate-1/2 max-h-[85vh] shadow-[0_0_0_10000vw_rgba(0,0,0,0.3)]
        `}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={
                Post?.id_account?.picture
                  ? Post?.id_account?.picture
                  : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
              }
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{Post?.id_account?.userName}</p>
              <Select
                value={status}
                defaultValue={Post?.status}
                onValueChange={setStatus}
              >
                <SelectTrigger className="!px-2 !py-0.5 h-auto border-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="friends">Friends</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* content */}
          <div className="max-h-[60vh] scroll-hover">
            <textarea
              value={Post?.content}
              placeholder="Bạn đang nghĩ gì?"
              className={`${
                isDarkMode
                  ? "bg-[#252728] text-gray-100"
                  : "bg-[#F0F2F5] text-gray-900 "
              } 
           w-full px-2 pt-3 pb-10 rounded opacity-80`}
            />

            {/* Ảnh đính kèm (nếu có) */}
            {Post?.media_urls?.length > 0 &&
              Post?.media_urls?.map((uri: string) => (
                <div className="grid place-content-center bg-transparent">
                  <img
                    src={uri}
                    alt=""
                    className="w-full h-full max-h-[500px] cursor-pointer"
                  />
                </div>
              ))}
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-end gap-3 *:cursor-pointer">
            <button
              type="button"
              className="px-4 py-2 rounded-md text-sm bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
