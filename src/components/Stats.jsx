import { motion } from "framer-motion";

const stats = [
  { number: "5+", title: "Certificates" },
  { number: "3+", title: "Speaking Courses" },
  { number: "2+", title: "Published Works" },
  { number: "21", title: "Years of Story" }
];

export default function Stats() {
  return (
    <section className="py-20 sm:py-24 px-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card text-center"
            >
              <h3 className="font-display text-4xl sm:text-5xl font-bold gold-text">
                {item.number}
              </h3>
              <p className="mt-3 text-white/65 text-sm sm:text-base tracking-wide">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
