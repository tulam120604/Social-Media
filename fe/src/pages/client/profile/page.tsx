import Post_status from "../../../components/socialPost/create_socialPost";
import Infor_profile from "./infor_profile";
import ListMyPost_component from "./list_my_post";

export default function Profile_page() {
  return (
    <div className="w-full h-full space-y-2">
      <Infor_profile />
      <div className="w-full h-full flex justify-between gap-x-4">
        <div className="w-full space-y-4">
          <Post_status />
          <ListMyPost_component />
        </div>
       
      </div>
    </div>
  );
}
