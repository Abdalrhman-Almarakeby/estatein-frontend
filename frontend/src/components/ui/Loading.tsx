import LoadingSVG from "@/assets/loading.svg?react";

export 
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-50 grid h-full w-full place-items-center bg-gray-30/30"
    >
      <LoadingSVG role="img" aria-label="Loading indicator" className="size-30 fill-purple-60" />
    </div>
  );
}
