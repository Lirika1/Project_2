"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const Sidebar = ({ user }: SidebarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Web logo"
            className="w-[24px] max-xl:w-[14px]"
          />
          <h1 className="sidebar-logo">Banky</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", "flex items-center gap-2 p-2", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6 flex items-center gap-2">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={24} 
                  height={24} 
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
                <p className={cn("sidebar-label whitespace-nowrap", { "!text-white": isActive })}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      USER
      </nav>


      <Footer user={user} type='desktop'/>

    </section>
  );
};

export default Sidebar;
