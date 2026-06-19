import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#speaking", label: "Speaking" },
  { href: "#works", label: "Works" },
  { href: "#publications", label: "Publications" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-900/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
          : "backdrop-blur-md bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4 sm:py-5">
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="w-9 h-9 rounded-full border border-gold-500/60 flex items-center justify-center font-display font-bold text-gold-400 text-sm group-hover:shadow-goldsm transition-shadow">
            AY
          </span>
          <span className="font-display text-lg sm:text-xl font-bold tracking-wide text-white">
            Beyond <span className="gold-text">The Frame</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm tracking-wide text-white/75 hover:text-white transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="btn-gold !px-6 !py-2.5 !text-sm">
            Let's Talk
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink-900/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="container-custom flex flex-col gap-1 py-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-white/85 border-b border-white/5 last:border-none"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gold mt-5 !py-3 text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
