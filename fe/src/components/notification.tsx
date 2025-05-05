import { BellOff } from "lucide-react";

export default function Notification_component() {
  return (
    <div>
      <strong className="font-normal">Notification</strong>

      {/* No notification */}
      <div className="grid place-content-center w-full h-[150px]">
        <div className="flex flex-col items-center gap-y-1">
          <BellOff />
          <span>No notifications</span>
        </div>
      </div>
    </div>
  );
}
