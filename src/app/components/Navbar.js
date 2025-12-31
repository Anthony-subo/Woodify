"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => window.innerWidth > 768 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b border-amber-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80"
            alt="Woodify Logo"
            className="w-10 h-10 rounded-full border border-amber-200 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
          <h1 className="text-xl font-bold text-amber-800 tracking-tight">Woodify</h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`px-2 py-1 rounded transition-colors duration-200 hover:bg-amber-100 hover:text-amber-800 ${
                  mounted && pathname === link.href
                    ? "text-amber-700 font-semibold underline underline-offset-2"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-3 text-amber-700 text-lg">
          <a href="https://instagram.com/woodify" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-amber-600 transition-transform duration-300">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/woodify" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-amber-600 transition-transform duration-300">
            <FaFacebookF />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-amber-800 p-1 rounded hover:bg-amber-100 transition-all duration-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-amber-100 shadow-md rounded-b-lg"
          >
            <ul className="flex flex-col items-center py-3 space-y-2 text-gray-800 font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded transition-colors duration-150 hover:bg-amber-100 hover:text-amber-800 ${
                      mounted && pathname === link.href ? "text-amber-700 font-semibold" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="flex space-x-3 text-amber-700 text-xl pt-2">
                <a href="https://instagram.com/woodify" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-amber-100 hover:text-amber-600 transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/woodify" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-amber-100 hover:text-amber-600 transition-all duration-300">
                  <FaFacebookF />
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
