import { motion } from "framer-motion";
import { X, Check, Award } from "lucide-react";

const badItems = [
  "Offshore call centres",
  "12-month lock-in contracts",
  "Days waiting for a response",
  "Jargon and upselling",
];

const goodItems = [
  "Local Perth-based support",
  "Month-to-month, cancel anytime",
  "Under 60 minute response",
  "Plain English, honest advice",
];

const About = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why We're Different
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-deep md:text-4xl lg:text-5xl">
              We're not like other IT companies.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-mid">
              Run by a degree-qualified network engineer who got tired of seeing Perth
              businesses overcharged and underserved by big IT firms. Direct, local,
              accountable.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy-deep text-off-white">
                <Award className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-navy-deep">Certified IT Professionals</p>
                <p className="text-sm text-accent">Degree-qualified network engineer</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-sm border-l-4 border-destructive bg-card p-6 shadow-card"
            >
              <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-destructive">
                The "Standard" Firm
              </h4>
              <ul className="space-y-3">
                {badItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy-mid/80">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-sm border-l-4 border-accent bg-navy-deep p-6 shadow-elevated"
            >
              <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-accent">
                The JKTech Way
              </h4>
              <ul className="space-y-3">
                {goodItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-off-white/85">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
