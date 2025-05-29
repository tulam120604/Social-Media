import { useForm } from "react-hook-form";
import { useViewProfileQuery } from "../../redux/sliceApis/auth";
import { useAddCommentMutation } from "../../redux/sliceApis/post";
import useDarkMode from "../../utils/getTheme";
import ListComment_component from "./listComment";

export default function Comment_component({
  idPost,
}: {
  idPost: string | number | undefined;
}) {
  const isDarkMode = useDarkMode();
  const { register, handleSubmit, reset } = useForm();
  const { data, isLoading } = useViewProfileQuery();
  const [addComment, { isLoading: loadingAddComment }] =
    useAddCommentMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function submitForm(value: any) {
    try {
      await addComment({
        idPost,
        content: value?.content,
        action: "add_comment",
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {/* form */}
      <form
        className="flex items-center w-full gap-x-2 my-4"
        onSubmit={handleSubmit(submitForm)}
      >
        {/* avatar */}
        {isLoading ? (
          <div
            className={`${
              isDarkMode ? "bg-[#333334]" : "bg-[#F0F2F5]"
            } w-10 h-10 rounded-full animate-pulse`}
          />
        ) : (
          <img
            src={
              data?.data?.data?.picture
                ? data?.data?.data?.picture
                : "https://picsum.photos/320/180"
            }
            alt=""
            className="w-10 h-10 rounded-full border"
          />
        )}

        <div
          className={`${
            isDarkMode
              ? "bg-[#333334] text-gray-100"
              : "bg-[#F0F2F5] text-gray-900 "
          } flex items-center w-full rounded py-1 px-2`}
        >
          <input
            {...register("content")}
            className="w-full p-2 rounded opacity-80 outline-none"
          />

          {/* show image & video upload */}
          {/* <div className="flex flex-wrap gap-2">
          {showImage &&
            showImage?.map((value: any, i: number) => (
              <img
                key={i}
                src={value}
                className="max-w-full h-full max-h-[200px] mt-1"
              />
            ))}
        </div> */}

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
              {/* <label htmlFor="uploadImage">
              <ImageUp strokeWidth={1.88} size={18} />
              <span>Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="hidden"
                id="uploadImage"
              />
            </label> */}
            </div>
            <button
              disabled-={loadingAddComment}
              className="px-2 py-1.5 bg-[#4183F5] text-gray-50 rounded 
                    text-sm cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>

        {/* type */}
      </form>
      {/* list */}
      <ListComment_component />
    </div>
  );
}
