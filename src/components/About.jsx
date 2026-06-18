import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          src="/images/hero-2.jpeg"
          alt=""
          className="rounded-3xl"
        />

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">
            About Me
          </h2>

          <p className="leading-9 text-gray-300">
            Al Sayed Yahia Mohamed Ahmed,
            born in Gharbia Governorate.
            Writer, author and public speaker.
            Believes that every person carries a story worth telling.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-card">Age: 21</div>
            <div className="glass-card">Commercial Institute</div>
            <div className="glass-card">Writer</div>
            <div className="glass-card">Public Speaker</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
