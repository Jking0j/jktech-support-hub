import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Scoping call",
    desc: "30 minutes to confirm practice size, tool count, and a fixed price.",
  },
  {
    n: "02",
    title: "Discovery session",
    desc: "90 minutes on site, walking through every system that touches patient data.",
  },
  {
    n: "03",
    title: "Assessment & pack",
    desc: "Reasoning documented against each tool, all six deliverables drafted.",
  },
  {
    n: "04",
    title: "Walkthrough",
    desc: "Findings presented plainly. The register is yours to keep and maintain.",
  },
];

const AIComplianceProcess = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How It Runs
          </span>
          <h2 className="font-display text-3xl font-bold text-navy-deep md:text-4xl lg:text-5xl">
            About two weeks, most of it not yours.
          </h2>
        </motion.div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-t-2 border-accent pt-6"
            >
              <span className="font-display text-3xl font-bold text-accent/40">
                {step.n}
              </span>
              <h4 className="mt-3 font-display text-lg font-bold text-navy-deep">
                {step.title}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-navy-mid">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIComplianceProcess;
