import { useState, useEffect, useRef, useDebugValue } from "react";

export function useThrottle<T>(value: T, interval: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);

  const lastUpdated = useRef<number | null>(null);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  useDebugValue({
    throttledValue,
    interval,
    lastUpdated: lastUpdated.current ? new Date(lastUpdated.current).toISOString() : null,
  });

  return throttledValue;
}
