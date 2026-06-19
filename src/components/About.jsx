import { motion } from "framer-motion";
import { Calendar, Feather, Mic2, Sparkles } from "lucide-react";

const facts = [
  { label: "Age", value: "21", icon: Calendar },
  { label: "Role", value: "Writer", icon: Feather },
  { label: "Craft", value: "Public Speaker", icon: Mic2 },
  { label: "Spirit", value: "Creative Mind", icon: Sparkles }
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32 px-6 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow justify-center">About</span>
          <h2 className="section-title mt-5">The Person Behind The Story</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="frame-corner top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl" />
            <div className="frame-corner top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl" />
            <div className="frame-corner bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl" />
            <div className="frame-corner bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-gold">
              <img
                src="/hero-2.jpeg"
                alt="Al Sayed Yahia"
                className="w-full h-[460px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Al Sayed Yahia <span className="gold-text">Mohamed Ahmed</span>
            </h3>

            <p className="text-white/70 text-base sm:text-lg leading-8 mb-4">
              Born and raised in Gharbia Governorate, Egypt, Al Sayed is a writer,
              author, and public speaker who believes that every life is a story
              worth telling — and every storyteller has the power to move hearts.
            </p>

            <p className="text-white/70 text-base sm:text-lg leading-8 mb-10">
              His work blends introspective storytelling with the rhythm of spoken
              word, exploring meaning, memory, and the quiet moments that shape who
              we become. On stage and on the page, he writes to be understood — and
              speaks to be remembered.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {facts.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="info-card"
                >
                  <Icon className="text-gold-400" size={20} />
                  <span className="info-value">{value}</span>
                  <span className="info-label">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
