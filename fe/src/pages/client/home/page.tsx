import Box_video_component from "../../../components/box_video";
import Menu_component from "../../../components/menu";

export default function Home_page() {
  return (
    <div className="flex flex-col gap-y-8">
      <Menu_component />

      {/* list video */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8">
        {Array.from({ length: 100 }, () => (
          <Box_video_component />
        ))}
      </div>
    </div>
  );
}
