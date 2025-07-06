// ErrorAlert.tsx
import { X, XCircle } from "lucide-react";
import { clsx } from "clsx"; // tuỳ thích—để gộp className

type Props = {
  message?: string;
  description?: string;
  onClose?: () => void;
  className?: string;
};

export default function ErrorAlert({
  message = "Đã xảy ra lỗi!",
  description = "Thao tác không thành công, vui lòng thử lại.",
  onClose,
  className
}: Props) {
  return (
    <div
      role="alert"
      className={clsx(
        "flex w-full max-w-md items-start gap-3 rounded-lg border",
        "border-red-300 bg-red-50 p-4 text-red-800 shadow-md",
        className
      )}
    >
      {/* Icon lỗi */}
      <XCircle className="h-5 w-5 shrink-0" />

      {/* Nội dung */}
      <div className="flex-1 text-sm leading-tight">
        <p className="font-medium">{message}</p>
        {description && <p className="mt-0.5">{description}</p>}
      </div>

      {/* Nút đóng (tùy chọn) */}
      {onClose && (
        <button
          type="button"
          aria-label="Đóng"
          onClick={onClose}
          className="rounded p-1 text-red-500 transition hover:bg-red-100 hover:text-red-700"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
