"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo } from "@/assets/images";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white items-center justfy center flex font-bold shadow-md"
      >
        <Image src={logo} alt="logo" />
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={pathname === "/about" ? "text-blue-600" : "text-black"}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={pathname === "/projects" ? "text-blue-600" : "text-black"}
        >
          Projects
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
