/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileVideo, ImageUp } from "lucide-react";
import useDarkMode from "../../../utils/getTheme";
import { ChangeEvent, useState } from "react";
import { useCreatePostMutation } from "../../../redux/sliceApis/post";
import { useForm } from "react-hook-form";
import { Loading_Spinner } from "../../../components/loading";

export default function Post_status() {
  const isDarkMode = useDarkMode();

  // create post status
  const [createPost, { isLoading }] = useCreatePostMutation();
  const { register, handleSubmit, reset } = useForm<any>();

  const [showiImage, setShowImage] = useState<string[] | null>(null);
  const [images, setImages] = useState<any[] | null>(null);
  const [status, setStatus] = useState<string>("public");

  // render img upload
  function uploadImage(e: ChangeEvent<HTMLInputElement>) {
    const files = e?.target?.files;
    if (files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setShowImage((prev) => [...(prev || []), imageUrl]);
      setImages((prev) => [...(prev || []), ...Array.from(files)]);
    }
  }
  // submit
  async function submitForm(value: { content: string }) {
    try {
      const formData = new FormData();
      images?.forEach((file) => {
        formData.append("media_urls", file);
      });
      formData.append("content", value?.content);
      formData.append("status", status);
      await createPost({
        type: "create_socialPost",
        dataRequest: formData,
      });
      reset();
      setImages([]);
      setShowImage([]);
    } catch (error) {
      console.error("Post creation failed:", error);
    }
  }
  return (
    <div className="flex gap-x-4 items-start">
      <img
        src="https://picsum.photos/320/180"
        alt=""
        className="w-12 h-12 rounded-full"
      />
      {/* form post status & type*/}
      <form className="w-full space-y-1" onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          {...register("content")}
          placeholder="What's on your mind?"
          className={`${
            isDarkMode
              ? "bg-[#333334] text-gray-100"
              : "bg-[#F0F2F5] text-gray-900 "
          } w-full px-2 pt-3 pb-10 rounded opacity-80`}
        />

        {/* show image & video upload */}
        <div className="flex flex-wrap gap-2">
          {showiImage &&
            showiImage?.map((value: any, i: number) => (
              <img
                key={i}
                src={value}
                className="max-w-full h-full max-h-[200px] mt-1"
              />
            ))}
        </div>

        {/* upload image & video */}
        <div className="flex justify-between">
          <div
            className={`${
              isDarkMode
                ? "*:hover:bg-[#333334] text-gray-100"
                : "*:hover:bg-[#F0F2F5] text-gray-900 "
            } flex gap-x-4 items-center *:flex *:items-center **:gap-x-1 
            *:text-sm *:opacity-75 *:cursor-pointer *:p-1 **:rounded *:duration-200`}
          >
            {/* image */}
            <label htmlFor="uploadImage">
              <ImageUp strokeWidth={1.88} size={18} />
              <span>Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="hidden"
                id="uploadImage"
              />
            </label>
            {/* video */}
            <button type="button">
              <FileVideo strokeWidth={1.88} size={18} />
              <span>Video</span>
            </button>
          </div>
          <button
            className="px-2 py-1.5 bg-[#4183F5] text-gray-50 rounded 
            text-sm cursor-pointer"
          >
            Send
          </button>
        </div>
        {/* type */}
      </form>
      {isLoading && <Loading_Spinner />}
    </div>
  );
}
