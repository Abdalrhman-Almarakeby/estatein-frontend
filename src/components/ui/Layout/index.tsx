import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col pt-[82px] md:p-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
