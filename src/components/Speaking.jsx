import { motion } from "framer-motion";

const images = [
  "/images/speaker-1.jpeg",
  "/images/speaker-2.jpeg",
  "/images/speaker-3.jpeg"
];

export default function Speaking() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="section-title">
          Public Speaking
        </h2>

        <p className="section-text">
          Public speaking is more than communication.
          It is the ability to inspire, influence and leave an impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05
              }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
