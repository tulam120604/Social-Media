import { Gamepad2 } from "lucide-react";
import { Box_video_component } from "../../../components/box_video";

export default function Gaming_page() {
  return (
    <div>
      <div className="flex items-center gap-x-3 pb-6">
        <Gamepad2
          color="#fff"
          className="w-10 h-10 lg:w-16 lg:h-16  bg-red-500 rounded-full p-2.5"
        />
        <strong className="text-xl lg:text-3xl opacity-90">Gaming</strong>
      </div>
      {/* -- */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8">
        {Array.from({ length: 100 }, (_, i: number) => (
          <Box_video_component props={i} />
        ))}
      </div>
    </div>
  );
}
