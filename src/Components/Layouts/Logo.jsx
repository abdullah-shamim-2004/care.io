import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="font-bold text-xl" href={"/"}>
      CARE<span className="text-primary">.IO</span>
    </Link>
  );
};

export default Logo;
