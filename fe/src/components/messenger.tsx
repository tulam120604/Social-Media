import { MessageCircleOff } from "lucide-react";

export default function Messenger_component() {
  return (
    <div>
      <strong className="font-normal">Messenger</strong>

      {/* No mess */}
      <div className="grid place-content-center w-full h-[150px]">
        <div className="flex flex-col items-center gap-y-1">
          <MessageCircleOff />
          <span>No messenger</span>
        </div>
      </div>
    </div>
  )
}
