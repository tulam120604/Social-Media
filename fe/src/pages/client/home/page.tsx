import Story_component from "../../../components/stories/story";
import ListPost_component from "./listPost";
import Post_status from "../../../components/socialPost/create_socialPost";
import Suggest_for_you from "./suggest_for_you";

export default function Home_page() {
  return (
    <div className="w-full grid lg:grid-cols-[1fr_300px] gap-x-6">
      {/* left */}
      <div className="w-full overflow-hidden flex flex-col gap-y-4">
        <Story_component />
        <Post_status />
        {/* list post */}
        <ListPost_component />
      </div>

      {/* right */}
      <div className="px-4">
        <Suggest_for_you />
      </div>
    </div>
  );
}
