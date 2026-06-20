import { motion } from "framer-motion";
import { Phone } from "lucide-react";

/* ─── Navigation links that match section IDs ─── */
const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Courses",      href: "#speaking" },
  { label: "Publications", href: "#publications" },
  { label: "Contact",      href: "#contact" },
];

/* ─── Elsayed Yahia's social links — unchanged ─── */
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CiE2yjbfc/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alsayed_yahia_speaker?igsh=MXh1YmE0YmVodHU5bA==",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@elsayedyahia24",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
];

/* ─── Smooth scroll helper ─── */
function scrollTo(e, href) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = id === "home" ? document.body : document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        background:
          "linear-gradient(180deg, #0a0908 0%, #0f0e0b 40%, #0a0908 100%)",
        borderTop: "1px solid rgba(212,175,55,0.18)",
      }}
    >
      {/* ══ Top golden accent line ══ */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.55) 50%, transparent 100%)",
        }}
      />

      {/* ══ Main footer body ══ */}
      <div className="container-custom py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── Column 1: Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <a
              href="#"
              onClick={(e) => scrollTo(e, "#home")}
              className="inline-flex items-center gap-2.5 group w-fit"
              aria-label="Back to top"
            >
              <span
                className="w-9 h-9 rounded-full border flex items-center justify-center font-bold text-sm transition-shadow"
                style={{
                  borderColor: "rgba(212,175,55,0.6)",
                  color: "#d4af37",
                  fontFamily: "var(--font-display, serif)",
                }}
              >
                AY
              </span>
              <span
                className="text-lg font-bold tracking-wide text-white"
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Beyond{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #f3e3ab 0%, #d4af37 45%, #94701f 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  The Frame
                </span>
              </span>
            </a>

            <p
              className="text-sm leading-7 max-w-xs"
              style={{ color: "rgba(244,241,234,0.5)" }}
            >
              Portfolio of Al Sayed Yahia — storyteller, speaker, and author
              crafting narratives that inspire and endure.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} — Elsayed Yahia`}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212,175,55,0.28)",
                    background:
                      "linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.03))",
                    color: "rgba(212,175,55,0.85)",
                    backdropFilter: "blur(10px)",
                    transition: "border-color .3s, box-shadow .3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.7)";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(212,175,55,0.3)";
                    e.currentTarget.style.color = "#f3e3ab";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.28)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.color = "rgba(212,175,55,0.85)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Column 2: Quick Navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <h3
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: "#d4af37" }}
            >
              Quick Navigation
            </h3>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: "rgba(244,241,234,0.5)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#f3e3ab";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(244,241,234,0.5)";
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "16px",
                        height: "1px",
                        background:
                          "linear-gradient(90deg,#d4af37,transparent)",
                        transition: "width .3s",
                      }}
                      className="group-hover:w-5"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3: Developer Credit ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <h3
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: "#d4af37" }}
            >
              Website Developer
            </h3>

            {/* Dev credit glass card */}
            <div
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(212,175,55,0.18)",
                background:
                  "linear-gradient(165deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                padding: "20px 22px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              {/* Brand name */}
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "rgba(212,175,55,0.6)" }}
              >
                Designed &amp; Developed By
              </p>

              <p
                className="text-base font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Basem Taha
              </p>

              {/* Dark Byte brand */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    border: "1px solid rgba(212,175,55,0.35)",
                    background:
                      "linear-gradient(135deg,rgba(212,175,55,0.15),rgba(212,175,55,0.04))",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#d4af37",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#d4af37",
                      boxShadow: "0 0 8px rgba(212,175,55,0.8)",
                    }}
                  />
                  Dark Byte
                </span>
              </div>

              {/* Phone link */}
              <motion.a
                href="tel:+201091291823"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 text-sm transition-colors duration-300"
                style={{ color: "rgba(244,241,234,0.6)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f3e3ab";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(244,241,234,0.6)";
                }}
                aria-label="Call Dark Byte developer: 01091291823"
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212,175,55,0.3)",
                    background: "rgba(212,175,55,0.08)",
                    color: "#d4af37",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={13} />
                </span>
                01091291823
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ══ Divider ══ */}
        <div
          className="my-10"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 0%,rgba(212,175,55,0.3) 30%,rgba(212,175,55,0.3) 70%,transparent 100%)",
          }}
        />

        {/* ══ Bottom row ══ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs tracking-wide"
            style={{ color: "rgba(244,241,234,0.35)" }}
          >
            © {year}{" "}
            <span style={{ color: "rgba(212,175,55,0.7)" }}>
              Beyond The Frame
            </span>{" "}
            — Al Sayed Yahia. All rights reserved.
          </p>

          <p
            className="text-xs tracking-wide"
            style={{ color: "rgba(244,241,234,0.25)" }}
          >
            Crafted with passion &amp; storytelling
          </p>
        </div>
      </div>
    </footer>
  );
}
