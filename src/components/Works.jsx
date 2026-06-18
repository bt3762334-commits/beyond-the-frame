import { motion } from "framer-motion";

export default function Works() {
  return (
    <section id="works" className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="section-title">Featured Works</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          <motion.div className="glass-card" whileHover={{ y: -10 }}>
            <img src="/script-book.jpeg" className="rounded-2xl" />

            <h3 className="text-2xl font-bold mt-6">
              Your Life Is A Story
            </h3>

            <p className="text-gray-400 mt-4">
              A story about life, writing and meaning.
            </p>
          </motion.div>

          <motion.div className="glass-card" whileHover={{ y: -10 }}>
            <img src="/saheb-athar.jpeg" className="rounded-2xl" />

            <h3 className="text-2xl font-bold mt-6">
              Saheb Athar
            </h3>

            <p className="text-gray-400 mt-4">
              Leaving a meaningful impact behind.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
