import Story_component from "../../../components/story";
import Brithdays from "./brithdays";
import Friends_request from "./friends_request";
import Post_status from "./post_status";

export default function Home_page() {
  return (
    <div className="grid lg:grid-cols-[calc(100%-370px)_350px] justify-between">
      <div className="flex flex-col gap-y-4 *:bg-white *:p-4 *:rounded *:shadow-lg">
        <Story_component />
        <Post_status />
      </div>
      <div>
        <div className="space-y-4 *:bg-white *:p-4 *:rounded *:shadow-lg sticky top-0">
          <Friends_request />
          <Brithdays />
        </div>
      </div>
    </div>
  );
}
