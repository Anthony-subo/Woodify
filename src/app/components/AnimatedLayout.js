"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1], // smoother easing curve
        }}
        className="relative z-10 focus:outline-none"
        tabIndex={-1} // helps screen readers refocus after page change
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
