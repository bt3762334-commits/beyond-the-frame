import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="section-text">
          Let’s work together and create something meaningful.
        </p>

        <motion.a
          href="https://wa.me/201064594052"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold"
        >
          WhatsApp Me
        </motion.a>

        <div className="mt-10 text-gray-400 space-y-2">
          <p>📞 +20 10 64594052</p>
          <p>📘 Facebook / Instagram / TikTok available</p>
        </div>

      </div>
    </section>
  );
}
