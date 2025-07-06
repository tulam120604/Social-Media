import { Link } from "react-router-dom";
import Btn_Create_Story from "../button/btn_add_story";
import { useCreateStoryMutation } from "../../redux/sliceApis/stories";
import { Loading_Spinner } from "../loading";
import { useToast } from "../../lib/ui/use-toast";

export default function Story_component() {
  const [createStory, { isLoading }] = useCreateStoryMutation();
  const { toast } = useToast();

  //  toast({
  //     title: 'result?.data?.message',
  //     duration: 5000,
  //     className: `${isDarkMode
  //         ? "bg-[#333334] text-gray-100 border-transparent"
  //         : "bg-[#F0F2F5] text-gray-900  border-transparent"
  //       }`,
  //   });
  async function handleCreateStory({ file, status }: { file: File; status: string }) {
    try {
      const formData = new FormData();
      formData.append("media", file)
      const data = {
        media: formData,
        status: status,
      }
      const result = await createStory(data).unwrap();
      toast({
        title: result?.data?.message,
        duration: 5000,
        className: "bg-[#333334] text-gray-100 border-transparent",
      });
    } catch (error) {
      console.error("Post creation failed:", error);
    }
  }

  return (
    <>
      {
        isLoading && (<Loading_Spinner />)
      }
      <div className="flex gap-x-3 items-center overflow-x-auto hidden-scroll *:cursor-pointer 
      text-center scroll-hover-x h-full">
        <Btn_Create_Story onCreate={handleCreateStory} />
        {Array.from({ length: 20 }, () => (
          <Link to={"/stories"}>
            <div className="relative w-20">
              <img
                src="https://picsum.photos/320/180"
                alt=""
                className="rounded-full w-16 h-16 mx-auto border"
              />
            </div>
            <span className="text-xs opacity-80 font-medium line-clamp-2 mt-2">
              Add a Story
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
