/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export default function useClickOutSide(ref: any, handler: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}
