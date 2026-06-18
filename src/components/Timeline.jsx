import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "Beginning The Journey",
    text: "Started developing writing and storytelling skills."
  },
  {
    year: "2022",
    title: "Public Speaking",
    text: "Improved communication and public speaking abilities."
  },
  {
    year: "2023",
    title: "Writing Works",
    text: "Started publishing original writings and scripts."
  },
  {
    year: "2024",
    title: "Certificates",
    text: "Earned professional certificates and training achievements."
  },
  {
    year: "2025",
    title: "Content Creation",
    text: "Expanded influence through content and storytelling."
  }
];

export default function Timeline() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="section-title">
          Journey Timeline
        </h2>

        <div className="relative mt-16">

          <div className="absolute left-4 top-0 bottom-0 w-1 bg-yellow-500"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              className="ml-12 mb-14"
            >
              <div className="timeline-dot"></div>

              <h3 className="text-2xl font-bold text-yellow-400">
                {item.year}
              </h3>

              <h4 className="text-xl mt-2 font-semibold">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-3">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
