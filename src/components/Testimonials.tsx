import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const featured = {
  name: "Practice Manager",
  role: "Roleystone Family Medical Centre",
  content:
    "They took over our entire IT setup and the difference is night and day. Our staff used to complain about IT weekly — now they don't even think about it. System outages are basically zero.",
};

const others = [
  {
    name: "Steve Williams",
    role: "Home Office, Armadale",
    content: "Fixed my WiFi dead spots and now video calls just work. Should have called sooner.",
  },
  {
    name: "Marcus Chen",
    role: "Remote Worker, Kelmscott",
    content: "Set up my home office properly. Plain English, no unnecessary upsells.",
  },
  {
    name: "Lisa Thompson",
    role: "Small Business, Gosnells",
    content: "Network down Friday afternoon — back online in under an hour. That's the response we needed.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Trusted Locally
          </span>
          <h2 className="font-display text-3xl font-bold text-navy-deep md:text-4xl lg:text-5xl">
            Real results from Perth clients.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-border bg-card p-10 shadow-card lg:col-span-3"
          >
            <Quote className="mb-6 h-10 w-10 text-accent/40" strokeWidth={1.5} />
            <p className="font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              "{featured.content}"
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-bold text-navy-deep">{featured.name}</p>
              <p className="text-sm text-accent">{featured.role}</p>
            </div>
          </motion.div>

          {/* Others stacked */}
          <div className="grid gap-6 lg:col-span-2">
            {others.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-sm border border-border bg-card p-6 shadow-card"
              >
                <p className="text-sm leading-relaxed text-navy-mid">"{t.content}"</p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-bold text-navy-deep">{t.name}</p>
                  <p className="text-xs text-accent">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
