import { HashLink } from "react-router-hash-link";
import { NewsletterForm } from "@/components/form/NewsletterForm";
import logo from "@/assets/logo.svg";
import { FooterNav } from "./FooterNav.tsx";
import { SocialMediaLinks } from "./SocialMediaLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-t-gray-15 bg-gray-08 text-sm text-white lg:text-base">
      <div className="container flex flex-col space-y-12.5 py-12.5 md:py-8 xl:flex-row xl:gap-20 xl:space-y-0 2xl:py-20">
        <div className="space-y-7">
          <HashLink to="/#hero">
            <img
              src={logo}
              alt="Logo of Estatein, consisting of a purple abstract geometric shape that suggests a dynamic, folded form, set against a black background."
              loading="lazy"
              className="w-[100px]"
            />
          </HashLink>
          <NewsletterForm />
        </div>
        <FooterNav />
      </div>
      <div className="bg-gray-10 py-5 text-center md:py-3">
        <div className="container flex flex-col md:flex-row md:items-center md:gap-5">
          <SocialMediaLinks />
          <small className="mb-2.5 text-base md:order-1 md:mb-0">
            @{year} Estatein. All Rights Reserved.
          </small>
          <HashLink to="/" className="md:order-2">
            Terms & Conditions
          </HashLink>
        </div>
      </div>
    </footer>
  );
}
