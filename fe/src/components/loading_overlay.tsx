import { LoaderCircle } from "lucide-react";

export default function Loading_overlay() {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 bg-[#33333333] 
    grid place-content-center z-100"
    >
      <LoaderCircle className="animate-spin" color="#4C3896"/>
    </div>
  );
}
