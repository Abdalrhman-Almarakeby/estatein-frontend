import { HashLink } from "react-router-hash-link";
import { FooterLinks } from "./FooterLinks";

export function FooterNav() {
  return (
    <nav className="grid grid-cols-2 grid-rows-10 gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-x-10 lg:grid-cols-5 lg:grid-rows-1 lg:gap-5 xl:m-0 xl:flex xl:flex-grow xl:justify-between">
      <FooterLinks pageName="Home" className="row-span-4 md:order-1 md:row-span-5">
        <HashLink to="/#hero">Home</HashLink>
        <HashLink to="/#hero">Hero Section</HashLink>
        <HashLink to="/#featured-properties">Featured Properties</HashLink>
        <HashLink to="/#testimonials">Testimonials</HashLink>
        <HashLink to="/#faqs">FAQ's</HashLink>
      </FooterLinks>
      {/* // TODO: Add the right hash links in about us page   */}
      <FooterLinks pageName="About Us" className="row-span-5 md:order-2">
        <HashLink to="/about#hero">About Us</HashLink>
        <HashLink to="/about#hero">Our Story</HashLink>
        <HashLink to="/about#achievements">Our Achievements</HashLink>
        <HashLink to="/about#how-it-is-work">How It Is Works</HashLink>
        <HashLink to="/about#team">Our Team</HashLink>
        <HashLink to="/about#clients">Our Clients</HashLink>
      </FooterLinks>
      {/* // TODO: Add the right hash links in properties page   */}
      <FooterLinks pageName="Properties" className="row-span-3 md:order-4">
        <HashLink to="/properties#">Properties</HashLink>
        <HashLink to="/properties#portfolio">Portfolio</HashLink>
        <HashLink to="/properties#catagories">Catagories</HashLink>
      </FooterLinks>
      {/* // TODO: Add the right hash links in services page   */}
      <FooterLinks pageName="Services" className="row-span-5 md:order-3">
        <HashLink to="/services#">Services</HashLink>
        <HashLink to="/services#valuation">Valuation</HashLink>
        <HashLink to="/services#property-management">Property Management</HashLink>
        <HashLink to="/services#investments">Investments</HashLink>
      </FooterLinks>
      <FooterLinks pageName="Contact Us" className="row-span-3 md:order-5">
        <HashLink to="/contact#">Contact Us</HashLink>
        <HashLink to="/contact#contact">Contact Form</HashLink>
        <HashLink to="/contact#offices">Our Offices</HashLink>
      </FooterLinks>
    </nav>
  );
}
