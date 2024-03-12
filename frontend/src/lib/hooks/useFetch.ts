import { useState, useEffect } from "react";

type FetchProps<T> = {
  data: T | null;
  isPending: boolean;
  error: Error | null;
};

export function useFetch<T>(url: string, options: RequestInit = {}): FetchProps<T> {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortCont = new AbortController();

    (async () => {
      try {
        const res = await fetch(url, { signal: abortCont.signal, ...options });

        if (!res.ok) throw new Error("Could not fetch the data for that resource");
        const data = await res.json();

        setData(data);
        setError(null);
      } catch (err: unknown) {
        setError(err as Error);
      } finally {
        setIsPending(false);
      }
    })();

    return () => abortCont.abort();
  }, [url, options]);

  return { data, isPending, error };
}
