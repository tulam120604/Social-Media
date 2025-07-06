"use client";
import React, { useState, useEffect } from "react";
import { Camera, Plus } from "lucide-react";
import useDarkMode from "../../utils/getTheme";
interface StoryCreatorProps {
  /**
   * Hàm callback khi người dùng nhấn "Đăng".
   * @param data.file Ảnh hoặc video đã chọn
   * @param data.caption Chú thích
   */
  onCreate?: (data: { file: File; status: string }) => void;
}

/**
 * Component thuần TailwindCSS giúp tạo Story tương tự Instagram.
 * Chỉ phụ thuộc Tailwind + lucide-react cho icon (có thể thay SVG tuỳ ý).
 */
export default function Btn_Create_Story({ onCreate }: StoryCreatorProps) {
  const isDarkMode = useDarkMode();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("public");
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleSubmit = async () => {
    if (file && onCreate) {
      await onCreate({ file, status });
    }
    // reset

    setFile(null);
    setOpen(false);
  };

  const cancel_story = () => {
    setOpen(false);
    setFile(null);
  };

  return (
    <>
      {/* Trigger tile */}
      <button onClick={() => setOpen(true)}>
        <div className="relative w-20">
          <img
            src="https://picsum.photos/320/180"
            alt=""
            className="rounded-full w-16 h-16 mx-auto border"
          />
          <Plus
            strokeWidth={2}
            size={25}
            color="#fff"
            className="absolute top-1/2 left-1/2 -translate-1/2 opacity-80"
          />
        </div>
        <span className="text-xs opacity-80 font-medium line-clamp-2 mt-2">
          Add a Story
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Content */}
          <div
            className={`${isDarkMode ? "bg-[#252728]" : "bg-white"
              } relative rounded-xl w-[90%] max-w-md p-6 shadow-xl 
            space-y-4 animate-[fadeIn_.2s_ease-out]`}
          >
            <h2 className="text-lg font-semibold text-center">
              Create new story
            </h2>

            {/* Upload image */}
            <label
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400/60 
            rounded-xl p-6 cursor-pointer transition min-h-[160px]"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="max-h-40 rounded-lg object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Camera className="w-10 h-10" />
                  <p className="text-sm text-center">Drag photos here</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleChoose}
              />
            </label>

            <div className="flex justify-end gap-2 *:cursor-pointer *:px-4 *:py-2 *:rounded-lg text-sm">
              <button
                type="button"
                className="border border-gray-300 dark:border-gray-700 transition hover:opacity-75"
                onClick={cancel_story}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!file}
                className="text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
