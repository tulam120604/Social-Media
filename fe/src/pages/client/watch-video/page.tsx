import Comment from "./comments";
import Description_video from "./description-video";
import Interactions_video from "./interactions-video";
import Recomments_video from "./recomments-video";
import Video_player from "./video";

export default function Watch_video_page() {
  return (
    <div className="grid lg:grid-cols-[2.7fr_1.3fr] gap-6 overflow-hidden">
      {/* video, interaction, comment,... */}
      <div className="space-y-3">
        {/* video */}
        <div className="min-h-[200px] max-h-[1/3vh]">
          <Video_player />
        </div>
        {/* name video */}
        <div>
          <span className="text-xl font-semibold opacity-90">
            Series Ăn Cơm Cùng Doraemon #86 | Xé "tập mù" xem hôm nay Doraemon
            mang gì đến nè!
          </span>
        </div>
        {/* interactions */}
        <Interactions_video />
        {/* description */}
        <Description_video/>
        {/* comment */}
        <Comment/>
      </div>
      {/* recomment, ... */}
      <div>
        {/* recomment */}
        <Recomments_video/>
      </div>
    </div>
  );
}
