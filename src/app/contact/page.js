"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative pt-32 bg-gradient-to-br from-amber-50 to-white overflow-hidden">

      {/* CONTACT AREA */}
      <div className="max-w-6xl mx-auto px-6 text-center pb-32">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-6"
        >
          Get in Touch
        </motion.h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-16">
          Have a custom project in mind or want to learn more about our craftsmanship?
          Let’s build something timeless together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md rounded-xl py-6 px-4 hover:shadow-lg transition">
            <FaPhoneAlt className="text-amber-700 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Phone</h3>
            <p className="text-amber-700 font-medium mt-1">+254 712 345 678</p>
          </div>

          <div className="bg-white shadow-md rounded-xl py-6 px-4 hover:shadow-lg transition">
            <FaEnvelope className="text-amber-700 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-amber-700 font-medium mt-1">info@woodify.co.ke</p>
          </div>

          <div className="bg-white shadow-md rounded-xl py-6 px-4 hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-amber-700 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Location</h3>
            <p className="text-amber-700 font-medium mt-1">Nairobi, Kenya</p>
          </div>
        </div>

        {/* MAP */}
        <div className="overflow-hidden rounded-2xl shadow-lg mb-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.095248722522!2d36.819!3d-1.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1739e0a56c09%3A0x1a80a31e9cfab18!2sNairobi!5e0!3m2!1sen!2ske!4v1670000000000"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
