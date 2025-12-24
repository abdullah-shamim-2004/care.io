"use client";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  return (
    <div>
      <Link href={"/login"}>
        <button className="btn btn-primary btn-outline">Login</button>
      </Link>
    </div>
  );
};

export default AuthButtons;
