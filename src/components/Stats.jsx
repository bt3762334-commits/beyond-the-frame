import { motion } from "framer-motion";

const stats = [
  { number: "5+",  title: "Certificates",    href: "#certificates" },
  { number: "3+",  title: "Speaking Courses", href: "#speaking"     },
  { number: "2+",  title: "Published Works",  href: "#publications" },
  { number: "21",  title: "Years of Story",   href: "#about"        },
];

function scrollTo(e, href) {
  e.preventDefault();
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Stats() {
  return (
    <section className="py-20 sm:py-24 px-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              aria-label={`Go to ${item.title} section`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card text-center block"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <h3 className="font-display text-4xl sm:text-5xl font-bold gold-text">
                {item.number}
              </h3>
              <p className="mt-3 text-white/65 text-sm sm:text-base tracking-wide">
                {item.title}
              </p>
              {/* subtle gold underline hint on hover */}
              <span
                style={{
                  display: "block",
                  marginTop: "12px",
                  height: "1px",
                  width: "32px",
                  margin: "12px auto 0",
                  background: "linear-gradient(90deg,transparent,rgba(212,175,55,0.6),transparent)",
                  transition: "width .3s ease",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
