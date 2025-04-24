"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const email = session?.user?.email;

  // Navigation Menu Items
  const navMenu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blogs</Link>
      </li>
      {email && (
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-gradient-to-br from-black via-[#0c0c1c] to-[#040414]">
      <div className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            {/* Ensure the image source is correct */}
            <h2 className="text-3xl font-bold">Nolan AI</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <ul className="flex items-center justify-end gap-3">
            {status === "authenticated" ? (
              <>
                {session?.user?.image && (
                  <li>
                    <Image
                      className="rounded-full"
                      src={session.user.image} // Ensure the src is valid
                      width={40}
                      height={40}
                      alt="User"
                    />
                  </li>
                )}
                <li onClick={() => signOut()} className="btn btn-neutral">
                  Logout
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="btn bg-blue-600 hover:bg-blue-700"
                    href="/auth/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
