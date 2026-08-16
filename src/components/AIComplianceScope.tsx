import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const isItems = [
  "A technical audit of your AI and automated tools",
  "A documented, dated reasoning for each tool's compliance status",
  "Draft privacy policy wording, ready for your lawyer",
];

const isNotItems = [
  "Legal advice or a legal opinion",
  "A compliance certification or guarantee",
  "A replacement for your own legal review",
];

const AIComplianceScope = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Scope, Plainly
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-deep md:text-4xl lg:text-5xl">
              What this is, and isn't.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-mid">
              We say this upfront because a compliance service that overstates what it
              covers isn't one worth trusting. This is a technical assessment, built to
              sit alongside your own legal advice, not instead of it.
            </p>

            <div className="mt-10 rounded-sm border-l-4 border-accent bg-navy-deep p-6 shadow-elevated">
              <h4 className="mb-2 font-display text-lg font-bold text-off-white">
                Founding client program
              </h4>
              <p className="text-sm leading-relaxed text-off-white/70">
                We're onboarding a small number of practices ahead of the December
                deadline. Founding clients work directly with us, help shape the
                assessment, and get a reduced rate in exchange for feedback.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-sm border-l-4 border-accent bg-card p-6 shadow-card"
            >
              <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                What This Is
              </h4>
              <ul className="space-y-3">
                {isItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy-mid/80">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2} />
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
              className="rounded-sm border-l-4 border-border bg-card p-6 shadow-card"
            >
              <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                What This Isn't
              </h4>
              <ul className="space-y-3">
                {isNotItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy-mid/80">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" strokeWidth={2} />
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

export default AIComplianceScope;
