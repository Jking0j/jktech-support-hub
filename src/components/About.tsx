import { motion } from "framer-motion";

const facts = [
  {
    label: "Who does the work",
    body: "A degree qualified network engineer. You deal with the person doing the work, not an account manager relaying messages.",
  },
  {
    label: "Where we operate",
    body: "Perth and the surrounding metro area, on site where the work needs hands on it, remote where it doesn't.",
  },
  {
    label: "How engagements are structured",
    body: "Month to month for ongoing support, fixed scope quotes for projects and audits. No minimum term.",
  },
  {
    label: "How we quote",
    body: "Scope and price agreed in writing before work starts. If something changes mid project, you hear about it before the invoice does.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              How this works
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              Small enough to be direct.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-mid">
              Most IT problems in a small business aren't complicated, they're just
              nobody's job. The work here is straightforward: understand the setup,
              fix what's broken, and document what was done.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <dl className="border-t border-border">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="grid gap-2 border-b border-border py-6 sm:grid-cols-3 sm:gap-8"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    {fact.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-navy-mid sm:col-span-2">
                    {fact.body}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
