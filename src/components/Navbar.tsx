"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <NavigationMenu.Root className="my-10 w-[80%] mx-auto relative min-h-[100px] block">
      <NavigationMenu.List className="flex justify-between md:hidden">
        <NavigationMenu.Item className="flex flex-col justify-center">
          <Image
            src="/logo.png"
            alt="Mukesh Academy Logo"
            width="100"
            height="100"
          />
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <span
            tabIndex={0}
            onClick={() => {
              setNavbarExpanded(!navbarExpanded);
            }}
            className="cursor-pointer hover:border focus:border-2 p-2"
          >
            {navbarExpanded ? (
              <FaX className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </span>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List
        className={`${
          navbarExpanded ? "flex" : "hidden"
        } md:flex flex-col md:flex-row align-center items-center gap-4 list-none p-1 palanquin-light`}
      >
        <NavigationMenu.Item className="hidden md:flex flex-col justify-center">
          <Image
            src="/logo.png"
            alt="Mukesh Academy Logo"
            width="120"
            height="120"
          />
        </NavigationMenu.Item>
        {["about", "tutoring", "pricing", "testimonials", "contact"].map(
          (linkName) => (
            <NavbarLink
              key={linkName}
              linkName={linkName}
              active={activeLink === linkName}
              onClick={() => setActiveLink(linkName)}
            />
          )
        )}
        {/*<NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none text-slate-600 hover:text-slate-800"
            href="#about"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none text-slate-600 hover:text-slate-800"
            href="#tutoring"
          >
            Tutoring
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none text-slate-600 hover:text-slate-800"
            href="#pricing"
          >
            Pricing
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none text-slate-600 hover:text-slate-800"
            href="#testimonials"
          >
            Testimonials
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none text-slate-600 hover:text-slate-800"
            href="#contact"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navbar;
