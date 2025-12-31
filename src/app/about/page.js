"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-amber-50 to-white overflow-hidden">

      {/* Internal CSS */}
      <style jsx>{`
        .about-bg {
          background-image: url('https://images.unsplash.com/photo-1504198266280-5cef46a28c8b?auto=format&fit=crop&w=800&q=60');
          background-size: cover;
          background-position: center;
          opacity: 0.08;
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .about-title {
          background: linear-gradient(90deg, #d97706, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-subtitle::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          background-color: #d97706;
          margin-top: 6px;
          border-radius: 2px;
        }
        .about-text {
          text-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }
      `}</style>

      {/* Wood texture background */}
      <div className="about-bg" />

      {/* ABOUT INTRO */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-6 about-title">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6 about-text">
            Woodify was born from deep respect for wood – its textures, its story, and its strength.
            Each creation is shaped with passion and precision.
          </p>
          <p className="text-lg text-gray-700 mb-8 about-text">
            Our craftsmen turn natural timber into furniture that lives with you for generations.
          </p>

          <h3 className="text-2xl font-semibold text-amber-700 mb-4 about-subtitle">
            What We Believe In
          </h3>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Detail-driven craftsmanship</li>
            <li>Sustainable materials</li>
            <li>Long-lasting durability</li>
            <li>Empowering local artisans</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80"
              alt="Carpentry work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* PRODUCTS */}
      <section className="py-28 bg-white mt-28">
        <h2 className="text-4xl font-bold text-amber-700 text-center mb-20">
          Our Products
        </h2>

        <div className="max-w-6xl mx-auto space-y-28 px-6">
          {[
            {
              title: "Custom Chairs",
              price: "KES 8,000+",
              desc: "Beautiful ergonomic chairs handcrafted with excellence.",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Dining Tables",
              price: "KES 25,000+",
              desc: "Elegant dining tables made from premium hardwoods.",
              img: "https://images.unsplash.com/photo-1556909213-37e19a4f26d8?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Wardrobes & Cabinets",
              price: "KES 30,000+",
              desc: "Tailored storage solutions for modern living.",
              img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Custom Projects",
              price: "Price Varies",
              desc: "Personalized handcrafted furniture made to your vision.",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{item.desc}</p>
                <p className="text-xl font-bold text-amber-600">{item.price}</p>
              </div>

              <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                  <Image src={item.img} alt={item.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
