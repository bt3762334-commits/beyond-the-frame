import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const images = [
  "/certificate-1.jpeg",
  "/certificate-2.jpeg",
  "/certificate-3.jpeg",
  "/certificate-4.jpeg",
  "/certificate-5.jpeg"
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="certificates" className="py-28 sm:py-32 px-6">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="eyebrow justify-center">Recognition</span>
          <h2 className="section-title mt-5">Certificates &amp; Achievements</h2>
          <p className="section-text">
            Milestones earned through dedication to the craft of writing and speaking.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mt-14">
          {images.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="cert-frame group"
            >
              <div className="cert-frame-inner">
                <img
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-5">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-300 font-semibold">
                    <Award size={14} /> View Certificate
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
          plugins={[Zoom]}
          styles={{ container: { backgroundColor: "rgba(10,9,8,0.96)" } }}
        />
      </div>
    </section>
  );
}
