import { Box_video_component } from "../../../components/box_video";

export default function New_page() {
  return (
    <div>
      <div className="pb-6">
        <strong className="text-xl lg:text-3xl opacity-90">News</strong>
      </div>
      {/* -- */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-8">
        {Array.from({ length: 100 }, (_, i: number) => (
          <Box_video_component props={i} />
        ))}
      </div>
    </div>
  );
}
