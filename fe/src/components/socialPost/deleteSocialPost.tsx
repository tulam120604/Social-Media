import { Trash2 } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
import { useRemoveMyPostMutation } from "../../redux/sliceApis/post";
import { useToast } from "../../lib/ui/use-toast";

export default function DeleteSocialPost_component({
  idPost,
}: {
  idPost: string | number | undefined;
}) {
  const isDarkMode = useDarkMode();
  const { toast } = useToast();
  const [removeMyPost, { isLoading, isError }] = useRemoveMyPostMutation();

  async function actionDelete() {
    try {
      const result = await removeMyPost({
        action: "delete",
        idPost,
      });
      toast({
        title: result?.data?.message,
        duration: 3000,
        className: `${
          isDarkMode
            ? "bg-[#333334] text-gray-100 border-transparent"
            : "bg-[#F0F2F5] text-gray-900  border-transparent"
        }`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        disabled={isLoading || isError}
        className={`${
          isDarkMode
            ? "hover:bg-[#1C1C1D] text-gray-100"
            : "hover:bg-[#F1F5F9] text-gray-900 "
        }
        ${(isLoading || isError) && "!opacity-40"}
        flex items-center gap-x-2 cursor-pointer px-2 py-1 rounded duration-200 w-full`}
        onClick={actionDelete}
      >
        <Trash2 size={20} />
        Delete
      </button>
    </>
  );
}
