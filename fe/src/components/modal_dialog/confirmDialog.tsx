import { useRef } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import useDarkMode from "../../utils/getTheme";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type Props = {
  open: boolean;
  setOpen: SetState<boolean>; // ✅ dùng type ta vừa định nghĩa
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog_component({
  open,
  setOpen,
  message,
  onConfirm,
  onCancel,
}: Props) {
  const isDarkMode = useDarkMode();
  const ref_ConfirmDialog = useRef<HTMLDivElement>(null);
  // click outside
  useClickOutSide(ref_ConfirmDialog, () => {
    setOpen(false);
  });

  if (!open) return null;

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-1/2 w-screen h-screen 
    inset-0 bg-black/40 z-1000 flex items-center justify-center"
    >
      <div
        ref={ref_ConfirmDialog}
        className={`${
          isDarkMode
            ? "bg-[#323233] text-gray-100"
            : "bg-[#F1F5F9] text-gray-900 "
        } rounded-lg shadow-md p-6 max-w-sm`}
      >
        <p className="mb-4">{message}</p>
        <div className="flex justify-center gap-2 *:cursor-pointer *:duration-150">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md text-sm bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className=" px-4 py-2 rounded-md text-sm bg-red-600 text-white hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
