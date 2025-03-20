import { Box_row_video_component } from "../../../components/box_video";

export default function Recomments_video() {
  return (
    <div className="space-y-4 *:grid *:grid-cols-[1.2fr_1.8fr] *:gap-x-2 *:lg:h-[100px]">
      {Array.from({ length: 50 }, () => (
        <Box_row_video_component />
      ))}
    </div>
  );
}
