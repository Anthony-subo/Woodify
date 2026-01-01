"use client"; 
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-white overflow-hidden">

      {/* Wood Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="wood-bg" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M20 0 Q80 40 20 80 T20 160" fill="none" stroke="#d8b98a" strokeWidth="1" />
            <path d="M70 0 Q140 60 70 120 T70 240" fill="none" stroke="#e7cfa8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wood-bg)" />
      </svg>

      {/* Delivery Truck Illustration */}
      <svg
        className="absolute right-0 bottom-0 w-64 opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <g fill="#d97706">
          <rect x="2" y="20" width="40" height="20" rx="2" />
          <rect x="42" y="26" width="18" height="14" rx="2" />
          <circle cx="12" cy="44" r="4" />
          <circle cx="50" cy="44" r="4" />
          <rect x="8" y="12" width="24" height="8" rx="1" />
        </g>
      </svg>

      {/* Contact Cards */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
        {/* Top statement */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 mb-6 text-lg md:text-xl"
        >
          Have a question or a custom project? Reach out to us anytime!
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-10"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <motion.a
            href="tel:+25474237438"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-lg rounded-2xl py-6 px-4 hover:shadow-2xl transition flex flex-col items-center"
          >
            <FaPhoneAlt className="text-amber-700 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
            <p className="text-amber-700 font-medium">+254 712 345 678</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/254742337438?text=Hi%20Woodify,%20I%20have%20a%20custom%20project%20in%20mind"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white shadow-lg rounded-2xl py-6 px-4 hover:shadow-2xl transition flex flex-col items-center"
          >
            <FaWhatsapp className="text-green-500 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
            <p className="text-amber-700 font-medium">+254 712 345 678</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@woodify.co.ke"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white shadow-lg rounded-2xl py-6 px-4 hover:shadow-2xl transition flex flex-col items-center"
          >
            <FaEnvelope className="text-amber-700 text-3xl mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-amber-700 font-medium">info@woodify.co.ke</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
