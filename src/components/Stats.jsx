import { motion } from "framer-motion";

export default function Stats() {

  const stats = [
    {
      number: "5+",
      title: "Certificates"
    },
    {
      number: "3+",
      title: "Public Speaking Courses"
    },
    {
      number: "2+",
      title: "Published Works"
    },
    {
      number: "21",
      title: "Years Old"
    }
  ];

  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05
              }}
              className="glass-card text-center"
            >
              <h3 className="text-5xl font-bold text-yellow-400">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
