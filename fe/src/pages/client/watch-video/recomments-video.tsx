import { Box_row_video_component } from "../../../components/box_video";

export default function Recomments_video() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 50 }, () => (
        <Box_row_video_component />
      ))}
    </div>
  );
}
