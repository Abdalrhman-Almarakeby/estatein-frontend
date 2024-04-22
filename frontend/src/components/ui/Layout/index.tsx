import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col pt-[82px] md:p-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
