import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative grid min-h-[85vh] grid-cols-1 lg:grid-cols-2">
      {/* Left — headline */}
      <div className="flex flex-col justify-center bg-background px-6 py-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            IT Support for Small Businesses in Perth
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.1] text-navy-deep md:text-5xl lg:text-6xl"
        >
          Stop losing money to <span className="italic text-accent">IT downtime.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-navy-mid"
        >
          Built for Perth SMEs with 5–50 staff. No offshore call centres, no
          lock-in contracts — and we actually answer the phone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy-deep px-8 py-4 text-sm font-bold text-off-white transition-colors hover:bg-navy-mid"
          >
            Book a Free IT Health Check
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-sm border-2 border-navy-deep px-8 py-4 text-sm font-bold text-navy-deep transition-colors hover:bg-navy-deep hover:text-off-white"
          >
            See How We Help
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8 text-sm"
        >
          <div>
            <div className="font-display text-xl font-bold text-navy-deep">&lt;60 min</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Response Time</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="font-display text-xl font-bold text-navy-deep">Perth-local</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">No Offshore</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="font-display text-xl font-bold text-navy-deep">Degree Qualified</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Network Engineer</div>
          </div>
        </motion.div>
      </div>

      {/* Right — visual */}
      <div className="relative min-h-[400px] overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="#1e3a5f" />
          </svg>
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#e8edf3 1px, transparent 1px), linear-gradient(90deg, #e8edf3 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex h-full items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md rounded-sm border border-accent/30 bg-navy-mid/50 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest text-off-white/60">
                Network Status
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-off-white/10 pb-3">
                <span className="text-sm text-off-white/70">Firewall</span>
                <span className="text-xs font-semibold uppercase text-accent">Secure</span>
              </div>
              <div className="flex items-center justify-between border-b border-off-white/10 pb-3">
                <span className="text-sm text-off-white/70">Uptime (30d)</span>
                <span className="text-xs font-semibold text-off-white">99.97%</span>
              </div>
              <div className="flex items-center justify-between border-b border-off-white/10 pb-3">
                <span className="text-sm text-off-white/70">Backups</span>
                <span className="text-xs font-semibold uppercase text-accent">Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-off-white/70">Response SLA</span>
                <span className="text-xs font-semibold text-off-white">&lt; 60 min</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-sm border border-accent/20 bg-accent/10" />
              <div className="h-16 rounded-sm border border-accent/20 bg-accent/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
