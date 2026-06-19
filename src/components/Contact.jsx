import { motion } from "framer-motion";
import { Facebook, Instagram, Music2, Phone, MessageCircle } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    handle: "Follow my updates",
    href: "https:/https://www.facebook.com/share/1CiE2yjbfc//facebook.com",
    icon: Facebook
  },
  {
    label: "Instagram",
    handle: "Behind the words",
    href: "https:/https://www.instagram.com/alsayed_yahia_speaker?igsh=MXh1YmE0YmVodHU5bA==/instagram.com",
    icon: Instagram
  },
  {
    label: "TikTok",
    handle: "Short stories & clips",
    href: "https:/tiktok.com/@elsayedyahia24/tiktok.com",
    icon: Music2
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-32 px-6 relative">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="eyebrow justify-center">Get In Touch</span>
          <h2 className="section-title mt-5">Let's Tell Your Story</h2>
          <p className="section-text">
            Whether it's a collaboration, an invitation to speak, or simply a
            conversation about stories — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="social-icon-wrap w-14 h-14">
              <Phone className="text-gold-400" size={22} />
            </div>
            <div>
              <p className="info-label">Direct Line</p>
              <p className="font-display text-xl sm:text-2xl font-semibold text-white mt-1" dir="ltr">
                +20 10 6459 4052
              </p>
            </div>
          </div>

          <motion.a
            href="https://wa.me/201064594052"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold w-full sm:w-auto"
          >
            <MessageCircle size={18} />
            Message on WhatsApp
          </motion.a>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-8">
          {socials.map(({ label, handle, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="social-card group"
            >
              <div className="social-icon-wrap group-hover:shadow-goldsm transition-shadow">
                <Icon className="text-gold-400" size={20} />
              </div>
              <div>
                <p className="font-display font-semibold text-white">{label}</p>
                <p className="text-sm text-white/55 mt-0.5">{handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
