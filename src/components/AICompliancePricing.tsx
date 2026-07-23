import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Solo",
    subtitle: "1–2 practitioners",
    price: "$1,500",
    desc: "A fast, focused first pass.",
    featured: false,
  },
  {
    name: "Small Clinic",
    subtitle: "3–8 practitioners",
    price: "$2,800–3,500",
    desc: "The right depth for a typical practice.",
    featured: true,
  },
  {
    name: "Multi-site",
    subtitle: "9+ practitioners",
    price: "From $4,500",
    desc: "Scoped per site.",
    featured: false,
  },
];

const AICompliancePricing = () => {
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Fixed Price
          </span>
          <h2 className="font-display text-3xl font-bold text-navy-deep md:text-4xl lg:text-5xl">
            One price, agreed before we start.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={
                tier.featured
                  ? "relative rounded-sm border border-accent bg-navy-deep p-8 text-off-white shadow-elevated"
                  : "rounded-sm border border-border bg-card p-8 shadow-card"
              }
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-off-white">
                  Most Common
                </span>
              )}
              <h3 className={`font-display text-xl font-bold ${tier.featured ? "text-off-white" : "text-navy-deep"}`}>
                {tier.name}
              </h3>
              <p className={`text-sm ${tier.featured ? "text-off-white/60" : "text-muted-foreground"}`}>
                {tier.subtitle}
              </p>
              <p className={`mt-6 font-display text-3xl font-bold ${tier.featured ? "text-off-white" : "text-navy-deep"}`}>
                {tier.price}
              </p>
              <p className={`mt-3 text-sm ${tier.featured ? "text-off-white/70" : "text-navy-mid"}`}>
                {tier.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-start gap-3 rounded-sm border border-border bg-card p-6 shadow-card sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={2} />
            <p className="text-sm text-navy-mid">
              <span className="font-bold text-navy-deep">Annual review retainer</span> — $1,200/yr
              or $120/month. Keeps your register current as tools and guidance change.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICompliancePricing;
