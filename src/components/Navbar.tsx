"use client";

import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import { useState } from "react";
// import Hamburger from "./Hamburger";

const Navbar = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <NavigationMenu.Root className="my-10 w-[80%] mx-auto relative min-h-[80px] block">
      <NavigationMenu.List className="flex justify-between md:hidden">
        <NavigationMenu.Item className="flex flex-col justify-center">
          <Image
            src="/logo.png"
            alt="Mukesh Academy Logo"
            width="80"
            height="80"
          />
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className="flex flex-col justify-center cursor-pointer"
          onClick={() => {
            setNavbarExpanded(!navbarExpanded);
          }}
        >
          {navbarExpanded ? (
            <Cross2Icon scale={2} />
          ) : (
            <HamburgerMenuIcon scale={2} />
          )}
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.List
        className={`${
          navbarExpanded ? "flex" : "hidden"
        } md:flex flex-col md:flex-row align-center items-center gap-1 md:gap-4 list-none p-1`}
      >
        <NavigationMenu.Item className="hidden md:flex flex-col justify-center">
          <Image
            src="/logo.png"
            alt="Mukesh Academy Logo"
            width="80"
            height="80"
          />
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
            href="#about"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
            href="#tutoring"
          >
            Tutoring
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
            href="#pricing"
          >
            Pricing
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
            href="#testimonials"
          >
            Testimonials
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="flex flex-col justify-center">
          <NavigationMenu.Link
            className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none"
            href="#contact"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navbar;
