"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-[#fdf9f3] overflow-hidden">
      
      {/* Wood grain pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="wood" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M10 0 Q60 30 10 60 T10 120" fill="none" stroke="#d6b892" strokeWidth="1" />
            <path d="M40 0 Q90 40 40 80 T40 160" fill="none" stroke="#e2c6a0" strokeWidth="1" />
            <path d="M70 0 Q120 50 70 100 T70 200" fill="none" stroke="#caa87a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wood)" />
      </svg>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl px-6 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          Handcrafted Beauty by <span className="text-amber-600">Woodify</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Built with passion. Designed with precision. Furniture that lasts generations.
        </p>

        <a
          href="/about"
          className="inline-block bg-amber-700 hover:bg-amber-600 px-8 py-3 rounded-full font-semibold text-white shadow-lg"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
}
