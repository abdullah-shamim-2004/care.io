"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`
        relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
        hover:text-primary hover:bg-primary/10
        ${
          isActive
            ? "text-primary font-semibold bg-primary/10"
            : "text-gray-600 dark:text-gray-300"
        }
      `}
    >
      {children}

      {/* Active underline */}
      {isActive && (
        <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary" />
      )}
    </Link>
  );
};

export default NavLink;
