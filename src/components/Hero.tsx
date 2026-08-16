import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left — thesis */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Perth, Western Australia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-8 font-display text-4xl font-bold leading-[1.08] text-navy-deep md:text-5xl lg:text-6xl"
            >
              The engineering side of{" "}
              <span className="italic text-accent">IT support.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-navy-mid"
            >
              Network infrastructure, secure decommissioning, and AI compliance,
              handled by a degree qualified engineer rather than a help desk script.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy-deep px-8 py-4 text-sm font-bold text-off-white transition-colors hover:bg-navy-mid"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/ai-compliance"
                className="inline-flex items-center justify-center rounded-sm border-2 border-navy-deep px-8 py-4 text-sm font-bold text-navy-deep transition-colors hover:bg-navy-deep hover:text-off-white"
              >
                AI compliance for clinics
              </Link>
            </motion.div>
          </div>

          {/* Right — what we work on, as a register */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="border-t-2 border-navy-deep pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Typical engagements
              </p>
              <dl className="mt-6 space-y-5">
                {[
                  ["Infrastructure", "Switching, routing, firewalls, structured cabling"],
                  ["Decommissioning", "Device wipes and disposal to NIST 800-88 standards"],
                  ["Endpoint & domain", "Reimaging, Group Policy, Microsoft 365"],
                  ["AI compliance", "Automated decision making audits for allied health"],
                ].map(([term, detail]) => (
                  <div key={term} className="border-b border-border pb-5">
                    <dt className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                      {term}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-navy-mid">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
