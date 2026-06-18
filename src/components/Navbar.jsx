import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-yellow-400">
          Beyond The Frame
        </h2>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
