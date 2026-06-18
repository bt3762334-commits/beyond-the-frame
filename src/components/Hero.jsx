import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-5xl">

        <motion.img
          src="/hero-1.jpeg"
          alt="Al Sayed Yahia"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-56 h-56 mx-auto rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
        />

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold mt-8"
        >
          Al Sayed Yahia
        </motion.h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-yellow-400 mt-4 text-xl"
        >
          Writer • Author • Public Speaker
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto mt-8 text-gray-300 leading-8"
        >
          Every life is a story, and every story deserves to be told.
        </motion.p>

      </div>
    </section>
  );
}
