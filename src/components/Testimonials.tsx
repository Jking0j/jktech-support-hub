import { motion } from "framer-motion";

const featured = {
  name: "Practice Manager",
  role: "Roleystone Family Medical Centre",
  content:
    "They took over our entire IT setup and the difference is night and day. Our staff used to complain about IT weekly — now they don't even think about it. System outages are basically zero.",
};

const others = [
  {
    name: "Steve Williams",
    role: "Home office, Armadale",
    content: "Fixed my WiFi dead spots and now video calls just work. Should have called sooner.",
  },
  {
    name: "Marcus Chen",
    role: "Remote worker, Kelmscott",
    content: "Set up my home office properly. Plain English, no unnecessary upsells.",
  },
  {
    name: "Lisa Thompson",
    role: "Small business, Gosnells",
    content:
      "Network down Friday afternoon — back online the same afternoon. That's the response we needed.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="border-y border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            In their words
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl border-l-2 border-accent pl-8"
        >
          <p className="font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
            {featured.content}
          </p>
          <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-navy-mid">
            {featured.name}
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">{featured.role}</span>
          </footer>
        </motion.blockquote>

        <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-border pt-12 md:grid-cols-3">
          {others.map((t, index) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <p className="text-sm leading-relaxed text-navy-mid">{t.content}</p>
              <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {t.name}
                <span className="mx-1.5">/</span>
                {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
