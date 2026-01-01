"use client";
import { motion } from "framer-motion";
import { FaHammer, FaRulerCombined, FaTools } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#fdf9f3] overflow-hidden">

      {/* Floating Words */}
      <div className="absolute inset-0 pointer-events-none select-none text-[8rem] font-black text-amber-100 opacity-20 flex flex-wrap gap-20 px-10">
        {["CRAFT", "TIMBER", "DESIGN", "HANDMADE", "WOOD", "QUALITY"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Floating Tools */}
      <div className="absolute inset-0 pointer-events-none text-amber-300/30 text-6xl">
        <motion.div className="absolute top-20 left-20" animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }}>
          <FaHammer />
        </motion.div>
        <motion.div className="absolute bottom-32 right-24" animate={{ y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }}>
          <FaRulerCombined />
        </motion.div>
        <motion.div className="absolute top-1/2 right-1/3" animate={{ y: [0, 25, 0] }} transition={{ duration: 9, repeat: Infinity }}>
          <FaTools />
        </motion.div>
      </div>

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-amber-50/70" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">

        {/* Text */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Crafted By Hand.<br />
            Built To <span className="text-amber-700">Last Generations.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-xl">
            Woodify transforms raw timber into timeless furniture —
            blending passion, precision, and pride.
          </p>

          <div className="flex gap-5 mt-8">
            <a href="/gallery" className="bg-amber-700 hover:bg-amber-600 px-8 py-3 rounded-full font-semibold text-white shadow-xl transition">
              View Gallery
            </a>
            <a href="/contact" className="border-2 border-amber-700 px-8 py-3 rounded-full font-semibold text-amber-700 hover:bg-amber-700 hover:text-white transition">
              Get Quote
            </a>
          </div>
        </motion.div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-amber-200"
        >
          <h3 className="text-2xl font-bold text-amber-800 mb-4">
            Why Woodify?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Handmade with Precision</li>
            <li>✔ Custom Furniture Designs</li>
            <li>✔ Premium Hardwood Materials</li>
            <li>✔ Kenyan Crafted Excellence</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
