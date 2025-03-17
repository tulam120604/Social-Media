import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Box_video_component() {
  return (
    <div className="w-full md:h-[300px] flex flex-col gap-2 cursor-pointer overflow-hidden">
      {/* video */}
      <LazyLoadImage
        src={"https://picsum.photos/320/180"}
        height={200}
        width="full"
        effect="opacity"
        className="w-full h-[200px] rounded-md"
      />
      {/* /description video */}
      <div className="grid grid-cols-[40px_auto] items-start gap-4 h-full">
        {/* account */}
        <LazyLoadImage
          src={"https://picsum.photos/320/180"}
          height={40}
          width={40}
          effect="opacity"
          className="rounded-full w-[40px] h-[40px]"
        />

        {/* title */}
        <div className="flex flex-col">
          <strong className="opacity-80 line-clamp-2">
            [S7] Tuyển Tập Doraemon - Phần 73 - Binh Lính Đồ Chơi, Nhiệt Huyết
            Hội Thao Của Nobita
          </strong>
          {/* name account */}
          <span className="text-sm opacity-80">POPS Kids</span>
          <div className="flex gap-2 text-sm opacity-70">
            {/* view */}
            <span>70M views</span>
            {/* time */}
            <span>70M views</span>
          </div>
        </div>
      </div>
    </div>
  );
}
