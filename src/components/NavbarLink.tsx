import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";

type PropsType = {
  linkName: string;
  active: boolean;
  onClick: () => void;
};

const NavbarLink = ({ linkName, active, onClick }: PropsType) => {
  return (
    <NavigationMenu.Item className="flex flex-col justify-center">
      <NavigationMenu.Link
        className={clsx(
          "block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none text-slate-500 hover:text-slate-800 hover:border focus:border w-full md:w-auto",
          { "text-slate-800": active }
        )}
        href={`#${linkName}`}
        onClick={onClick}
      >
        {linkName[0].toUpperCase() + linkName.substring(1)}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

export default NavbarLink;
