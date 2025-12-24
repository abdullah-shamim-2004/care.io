"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <Link href={"/"}>
            <button className="btn btn-primary ">LogOut</button>
          </Link>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
