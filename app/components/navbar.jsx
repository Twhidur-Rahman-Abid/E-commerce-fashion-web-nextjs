"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-[10vh] flex items-center justify-between px-[5%] bg-Primary relative">
      <h1 className="text-xl font-medium">
        <Link href="/">Logo</Link>
      </h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex md:gap-10 lg:gap-20 text-white">
        <li>Collection</li>
        <li>
          <a href="/product-details.html">Shop</a>
        </li>
        <li>New Arrival</li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Desktop Login & Button */}
      <div className="hidden md:flex gap-4 text-white items-center">
        <p>Login</p>
        <Button variant="secondary">Get Started</Button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <i className="text-lg text-white ri-menu-3-line nav-icon cursor-pointer"></i>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-Primary text-white flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <ul className="flex flex-col gap-4">
            <li>Collection</li>
            <li>
              <a href="/product-details.html">Shop</a>
            </li>
            <li>New Arrival</li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <p>Login</p>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
