import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/ui/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Properties } from "./pages/Properties";
import { Property } from "./pages/Property";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import "./CSS/output.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Property />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
