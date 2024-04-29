import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useDebounce<T>(
  initialValue: T,
  millisecondsDelay = 500
): { debouncedValue: T; value: T; setValue: Dispatch<SetStateAction<T>> } {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), millisecondsDelay);

    return () => clearTimeout(id);
  }, [value, millisecondsDelay]);

  return { debouncedValue, value, setValue };
}
