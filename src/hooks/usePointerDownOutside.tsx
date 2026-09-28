import { RefObject, useEffect, useRef } from "react";

function usePointerDownOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackRef.current();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [ref]);
}

export default usePointerDownOutside;
