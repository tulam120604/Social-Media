/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export default function useClickOutSide(ref: any, handler: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      const el = ref?.current;
      if (el && el.contains(event.target)) {
        return;
      }
      handler(event);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, handler]);
}