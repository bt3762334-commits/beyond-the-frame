import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

const images = [
  "/images/certificate-1.jpeg",
  "/images/certificate-2.jpeg",
  "/images/certificate-3.jpeg",
  "/images/certificate-4.jpeg",
  "/images/certificate-5.jpeg"
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="certificates" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="section-title">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl cursor-pointer border border-white/10"
            />
          ))}

        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />

      </div>
    </section>
  );
}
