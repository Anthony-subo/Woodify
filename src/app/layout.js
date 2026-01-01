// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";

export const metadata = {
  title: "Woodify | Handcrafted Furniture & Timeless Design",
  description:
    "Woodify crafts fine furniture with a blend of tradition, design, and natural beauty. Discover woodwork made to last a lifetime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="
          relative 
          bg-gradient-to-br from-amber-50 via-white to-amber-100 
          text-gray-800 
          min-h-screen 
          font-sans 
          antialiased 
          selection:bg-amber-200
        "
      >
        {/* Main Wrapper */}
        <div className="relative flex flex-col min-h-screen">

          {/* Navbar */}
          <Navbar className="shadow-md z-50" />

          {/* Spacer for Fixed Navbar */}
          <div className="h-[72px] md:h-[80px]"></div>

          {/* Page Content */}
          <main className="flex-grow px-6 md:px-12 py-10">
            <AnimatedLayout>{children}</AnimatedLayout>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
