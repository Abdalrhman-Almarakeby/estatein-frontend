import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useShowHeader } from "./useShowHeader";
import { Header } from "./Header";
import { Footer } from "./Footer";

const HEADER_HEIGHT = 82;

export function Layout() {
  const showHeader = useShowHeader();

  return (
    <div className="flex min-h-svh flex-col pt-[82px] md:p-0">
      <Toaster
        toastOptions={{ className: "toast" }}
        containerStyle={{
          top: showHeader ? 20 + HEADER_HEIGHT : 20,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
      <Header showHeader={showHeader} />
      <Outlet />
      <Footer />
    </div>
  );
}
