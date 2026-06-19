import { motion } from "framer-motion";
import { Quote, Feather } from "lucide-react";

const excerpts = [
  {
    title: "حياتك قصة",
    text: `حياتك قصة وأنت الكاتب والبطل.
فيها رقيب وعتيد، فبانت صفحات حكايتك بتفاصيل، كل لحظة عدت في أيامك ويومك مهما كان صعب أو جميل.

حكاية تُكتب فترسم طريقًا طويلًا، فيظهر سؤال في البال بعلامة استفهام:
هل سنصل؟
أم ستكون النهاية على أمل الوصول؟`
  },
  {
    title: "ما الحياة إلا مرة",
    text: `هتعيش الحياة مرة،
وأجمل ما فيها أن تبدأ في طريق تكون فيه أنقى من جوه ومن بره،
وترسم ضحكة للهموم حتى لو كانت بوسع مجرة.
ما الحياة إلا مرة.`
  },
  {
    title: "هي دي الحياة معقول",
    text: `يمكن في ثانية الدنيا تقفل بابها وتقولك بره!

في لحظة تشوف الحياة واقفة،
وتعيش حالة غريبة لأول مرة.

عقارب ساعتك تلف عكس الاتجاه،
تمر ذكريات حياتك الحلوة والمرة.

وأنت البطل،
شاهد على القصة التي بانت تفاصيلها حتى الذرة.

فتبقى في حالة ذهول وتقول:
هي دي الحياة معقول؟

يا رب أكون في حلم،
وأقوم أرمي حاجات كتير بره.`
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-28 sm:py-32 px-6 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="eyebrow justify-center">
            <Feather size={13} className="text-gold-400" /> Publications
          </span>
          <h2 className="section-title mt-5">Literary Excerpts</h2>
          <p className="section-text">
            Words written to capture life's fleeting, fragile, and unforgettable moments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7 sm:gap-8 mt-16">
          {excerpts.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="pub-card flex flex-col"
            >
              <Quote className="text-gold-500/25 mb-2" size={34} />

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-gold-300 mb-4 text-right">
                {item.title}
              </h3>

              <p className="arabic-text text-white/85 text-base sm:text-lg leading-9 whitespace-pre-line flex-1">
                {item.text}
              </p>

              <div className="divider-gold mt-8 !mx-0 ml-auto w-16" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
