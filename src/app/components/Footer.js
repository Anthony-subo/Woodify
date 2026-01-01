"use client";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-950 to-amber-900 text-amber-100 py-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Woodify
          </h2>
          <p className="mt-2 text-xs text-amber-300 max-w-xs mx-auto md:mx-0">
            Crafting wood into timeless art — where every grain tells your story.
          </p>
        </div>


        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-white tracking-wide">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 text-lg text-amber-300">
            {[FaInstagram, FaFacebook, FaPinterest].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-transform transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-amber-800 mt-6 pt-4 text-center text-xs text-amber-400 tracking-wide">
        <span className="font-semibold">Woodify</span>. 
        Handcrafted with <span className="text-red-400">craftsmanship</span> 
      </div>
    </footer>
  );
}
