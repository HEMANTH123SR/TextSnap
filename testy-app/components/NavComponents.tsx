import React from "react";
import Link from "next/link";
import { FcMultipleCameras } from "react-icons/fc";
const Nav = () => {
  return (
    <>
      <header className="px-4 py-5 lg:px-6 h-14 flex items-center shadow-lg border-b-2 border-black">
        <Link className="flex items-center justify-center" href="#">
          <FcMultipleCameras className="text-4xl" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto sm:flex gap-6 hidden pr-5">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>

      <div className="pt-3 bg-white"></div>
    </>
  );
};

export default Nav;
