import { motion } from "framer-motion";

export default function Works() {
  return (
    <section
      id="works"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="section-title">
          Featured Works
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
          >
            <img
              src="/images/script-book.jpeg"
              alt=""
              className="rounded-2xl"
            />

            <h3 className="text-2xl font-bold mt-6">
              Your Life Is A Story
            </h3>

            <p className="text-gray-400 mt-4">
              A literary work exploring life as a story
              where every person is both the author and the hero.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
          >
            <img
              src="/images/saheb-athar.jpeg"
              alt=""
              className="rounded-2xl"
            />

            <h3 className="text-2xl font-bold mt-6">
              Saheb Athar
            </h3>

            <p className="text-gray-400 mt-4">
              A work reflecting the desire to leave
              a meaningful and lasting impact.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
