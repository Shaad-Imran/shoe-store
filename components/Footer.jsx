import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const labels = [
  "Find a store",
  "become a partner",
  "sign up for email",
  "send us feedback",
  "student discount",
];

const helpLabels = [
  "Order Status",
  "Delivery",
  "Returns",
  "Payment Options",
  "Contact Us",
];

const aboutLables = ["News", "Careers", "Investors", "Sustainability"];

const socialMediaLinks = [
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: <FaFacebookF size={20} />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: <FaTwitter size={20} />,
  },
  {
    name: "YouTube",
    link: "#",
    icon: <FaYoutube size={20} />,
  },
  {
    name: "Instagram",
    link: "#",
    icon: <FaInstagram size={20} />,
  },
];

const links = [
  { title: "Guides", link: "#" },
  { title: "Terms of Sale", link: "#" },
  { title: "Terms of Use", link: "#" },
  { title: "Privacy Policy", link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <ul className="flex flex-col gap-3 shrink-0">
            {labels.map((item, index) => {
              return (
                <li
                  key={index}
                  className="font-oswald font-medium uppercase text-sm cursor-pointer"
                >
                  {item}
                </li>
              );
            })}
          </ul>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>

              {helpLabels.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About nike
              </div>

              {aboutLables.map((item, index) => {
                return (
                  <div
                    className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          {socialMediaLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => window.open(link.link, "_blank")}
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              {link.icon}
            </div>
          ))}
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          {links.map((link) => (
            <div
              key={link.title}
              className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer"
              onClick={() => (window.location.href = link.link)}
            >
              {link.title}
            </div>
          ))}
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
