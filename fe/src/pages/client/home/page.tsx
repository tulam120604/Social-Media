import Story_component from "../../../components/story";
import Post_status from "./post_status";

export default function Home_page() {
  return (
    <div className="flex flex-col gap-y-8 *:bg-white *:p-4 *:rounded">
      <Story_component />
      <Post_status/>
      
    </div>
  );
}
