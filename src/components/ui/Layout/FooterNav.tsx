import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

export default function FooterNav() {
  return (
    <nav className="grid grid-cols-2 grid-rows-11 gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-x-10 lg:grid-cols-5 lg:grid-rows-1 lg:gap-5 xl:m-0 2xl:flex 2xl:gap-20">
      <FooterLinks pageName="Home" className="row-span-5 md:order-1">
        <Link to="/">Home</Link>
        <Link to="/#hero">Hero Section</Link>
        <Link to="/#featured-properties">Featured Properties</Link>
        <Link to="/#testimonials">Testimonials</Link>
        <Link to="/#faq">FAQ's</Link>
      </FooterLinks>
      <FooterLinks pageName="About Us" className="row-span-5 md:order-2">
        <Link to="/about">About Us</Link>
        <Link to="/about#story">Our Story</Link>
        <Link to="/about#work">Our Works</Link>
        <Link to="/about#how-it-is-work">How It Is Works</Link>
        <Link to="/about#team">Our Team</Link>
        <Link to="/about#clients">Our Clients</Link>
      </FooterLinks>
      <FooterLinks pageName="Properties" className="row-span-3 md:order-4">
        <Link to="/properties">Properties</Link>
        <Link to="/properties#portfolio">Portfolio</Link>
        <Link to="/properties#catagories">Catagories</Link>
      </FooterLinks>
      <FooterLinks pageName="Services" className="row-span-5 md:order-3">
        <Link to="/services">Services</Link>
        <Link to="/services#valuation">Valuation Mastery</Link>
        <Link to="/services#marketing">Strategic Marketing</Link>
        <Link to="/services#negotiation">Negotiation Wizardry</Link>
        <Link to="/services#closing-success">Closing Success</Link>
        <Link to="/services#property-management">Property Management</Link>
      </FooterLinks>
      <FooterLinks pageName="Contact Us" className="row-span-3 md:order-5">
        <Link to="/contact">Contact Us</Link>
        <Link to="/contact#contact">Contact Form</Link>
        <Link to="/contact#offices">Our Offices</Link>
      </FooterLinks>
    </nav>
  );
}
