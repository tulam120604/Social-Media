/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pencil, X } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditSocialPost_component({ Post }: { Post: any }) {
  const isDarkMode = useDarkMode();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields },
    clearErrors,
    setValue,
    reset,
  } = useForm<any>({
    defaultValues: {
      content: Post?.content,
      status: Post?.status,
      media_urls: Post?.media_urls,
    },
  });
  useEffect(() => {
    if (Post) {
      reset({
        content: Post.content,
        status: Post?.status,
        media_urls: Post.media_urls,
      });
    }
  }, [Post]);
  //
  const isDirty = Object.keys(dirtyFields).length > 0;

  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(Post?.status ?? "Public");
  async function submitForm(value: any) {
    try {
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  console.log(isDirty);
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
        <span className="whitespace-nowrap">Edit</span>
      </button>

      {/* box edit */}
      {open && (
        <form
          className={`${
            isDarkMode
              ? "bg-[#333334] text-gray-100"
              : "bg-[#fff] text-gray-900 "
          } 
        max-w-lg w-full mx-auto rounded-xl p-4 fixed top-1/2 left-1/2 mt-5 
        -translate-1/2 max-h-[85vh] shadow-[0_0_0_10000vw_rgba(0,0,0,0.6)]
        `}
        >
          {/* Header */}
          <div className="w-full flex justify-between">
            {/* avatar & status post */}
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
                <select
                  {...register("status")}
                  className={`${
                    isDarkMode
                      ? "bg-[#333334] text-gray-100 border-gray-500"
                      : "bg-[#fff] text-gray-900 border-gray-300"
                  } p-1 border rounded text-sm cursor-pointer`}
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends</option>
                  <option value="private">Private</option>
                </select>

                {/*  */}
              </div>
            </div>

            {/* close */}
            <div>
              <button
                className={`${
                  isDarkMode
                    ? "hover:bg-[#1C1C1D] text-gray-100"
                    : "hover:bg-[#F1F5F9] text-gray-900 "
                }
                    flex items-center gap-x-2 cursor-pointer p-2 rounded-full duration-200`}
                onClick={() => setOpen((pre) => !pre)}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* content */}
          <div className="max-h-[60vh] scroll-hover pb-5">
            <textarea
              defaultValue={Post?.content}
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
                  <div className="relative !:w-auto" key={uri}>
                    <button className="absolute top-2 right-2 z-10">
                      <Pencil />
                    </button>
                    <img
                      src={uri}
                      alt=""
                      className="max-h-[500px] cursor-pointer"
                    />
                  </div>
                ))}
          </div>

          {/* button save */}
          <button
            className="w-full cursor-pointer py-2 rounded-md text-sm 
          bg-blue-600 text-white hover:bg-blue-700 duration-200"
          >
            Save
          </button>
        </form>
      )}
    </>
  );
}
