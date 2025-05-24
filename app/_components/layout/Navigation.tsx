"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close Hamburger Icon when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative">
      {/* Nav Links for large screens */}
      <ul className="hidden md:flex items-center gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/photography">Photography</Link>
        </li>
        <li>
          <Link href="/music">Music</Link>
        </li>
        <li>
          <Link href="/webdev">Web Dev</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Hamburger and Close Buttons */}
      <button
        ref={buttonRef}
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        // Nav Links for small screens
        <ul
          ref={menuRef}
          className="absolute right-0 top-8 backdrop-blur-sm bg-white/85 shadow-lg rounded p-4 flex flex-col gap-4 z-50 md:hidden"
        >
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/photography" onClick={() => setIsOpen(false)}>
              Photography
            </Link>
          </li>
          <li>
            <Link href="/music" onClick={() => setIsOpen(false)}>
              Music
            </Link>
          </li>
          <li>
            <Link href="/webdev" onClick={() => setIsOpen(false)}>
              Web Dev
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
