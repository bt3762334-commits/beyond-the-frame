import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Mic, PenTool } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-[5] bg-radial-fade" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <span className="eyebrow">
            Portfolio of Al Sayed Yahia
          </span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto mb-10"
        >
          <div className="absolute -inset-3 rounded-full bg-gold-gradient opacity-70 blur-xl animate-pulse-soft" />
          <div className="absolute -inset-1.5 rounded-full bg-gold-gradient" />
          <img
            src="/hero-2.jpeg"
            alt="Al Sayed Yahia — Writer, Author & Public Speaker"
            className="relative w-full h-full rounded-full object-cover object-top border-[3px] border-ink-900 shadow-gold"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
        >
          Al Sayed <span className="gold-text">Yahia</span>
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-6 text-gold-300"
        >
          <span className="flex items-center gap-2 text-sm sm:text-base tracking-wide">
            <PenTool size={15} /> Writer
          </span>
          <span className="w-1 h-1 rounded-full bg-gold-500/60" />
          <span className="flex items-center gap-2 text-sm sm:text-base tracking-wide">
            <BookOpen size={15} /> Author
          </span>
          <span className="w-1 h-1 rounded-full bg-gold-500/60" />
          <span className="flex items-center gap-2 text-sm sm:text-base tracking-wide">
            <Mic size={15} /> Public Speaker
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="font-display italic max-w-2xl mx-auto mt-8 text-lg sm:text-xl text-white/75 leading-relaxed"
        >
          "Every life is a story, and every story deserves to be told."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          <a href="#works" className="btn-gold">
            Explore My Work
          </a>
          <a href="#contact" className="btn-ghost">
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { delay: 1.4, duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-400/70 hover:text-gold-300 transition-colors"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
