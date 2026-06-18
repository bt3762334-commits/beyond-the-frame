import { motion } from "framer-motion";

const images = [
  "/speaker-1.jpeg",
  "/speaker-2.jpeg",
  "/speaker-3.jpeg"
];

export default function Speaking() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="section-title">Public Speaking</h2>

        <p className="section-text">
          Communication is the power to influence and inspire others.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl h-[420px] object-cover w-full"
            />
          ))}

        </div>

      </div>
    </section>
  );
}
