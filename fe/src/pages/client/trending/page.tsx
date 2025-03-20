import { Flame } from "lucide-react";
import { Box_row_video_component } from "../../../components/box_video";

export default function Trending_page() {
  return (
    <div>
      <div className="flex items-center gap-x-3 border-b pb-4">
        <Flame
          color="#fff"
          className="w-10 h-10 lg:w-16 lg:h-16  bg-red-500 rounded-full p-2.5"
        />
        <strong className="text-xl lg:text-3xl opacity-90">Trending</strong>
      </div>
      {/* -- */}
      <div className="space-y-4 *:grid *:lg:grid-cols-[0.5fr_1.7fr] *:lg:h-[150px] *:gap-2 my-6">
        {Array.from({ length: 30 }, () => (
          <Box_row_video_component />
        ))}
      </div>
    </div>
  );
}
