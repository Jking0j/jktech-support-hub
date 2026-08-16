import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const registerRows: { tool: string; status: string; tone: "ok" | "flag" | "priority" }[] = [
  { tool: "AI Scribe", status: "Not ADM", tone: "ok" },
  { tool: "Intake Triage", status: "In Scope", tone: "flag" },
  { tool: "Waitlist Ranking", status: "In Scope", tone: "flag" },
  { tool: "NDIS Screening", status: "High Priority", tone: "priority" },
];

const toneClass: Record<string, string> = {
  ok: "text-accent",
  flag: "text-off-white",
  priority: "text-destructive",
};

const AIComplianceHero = () => {
  return (
    <section className="relative grid min-h-[85vh] grid-cols-1 lg:grid-cols-2">
      {/* Left — headline */}
      <div className="flex flex-col justify-center bg-background px-6 py-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            AI Compliance for Allied Health
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.1] text-navy-deep md:text-5xl lg:text-6xl"
        >
          From 10 December, your AI tools need a{" "}
          <span className="italic text-accent">paper trail.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-navy-mid"
        >
          New Privacy Act amendments require Australian health providers to disclose
          automated decision making, with no small business exemption. Most practices
          don't yet know which of their tools are affected.
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
            Book a Free Scoping Call
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              document.getElementById("deliverables")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-sm border-2 border-navy-deep px-8 py-4 text-sm font-bold text-navy-deep transition-colors hover:bg-navy-deep hover:text-off-white"
          >
            See What's Included
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8 text-sm"
        >
          <div>
            <div className="font-display text-xl font-bold text-navy-deep">10 Dec 2026</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Compliance Deadline</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="font-display text-xl font-bold text-navy-deep">No Exemption</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">For Health Providers</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="font-display text-xl font-bold text-navy-deep">6 Part</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Evidence Pack</div>
          </div>
        </motion.div>
      </div>

      {/* Right — visual: AI Tool Register preview */}
      <div className="relative min-h-[400px] overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="#1e3a5f" />
          </svg>
        </div>
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
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/60">
                AI Tool Register Preview
              </span>
            </div>

            <div className="space-y-4">
              {registerRows.map((row) => (
                <div
                  key={row.tool}
                  className="flex items-center justify-between border-b border-off-white/10 pb-3"
                >
                  <span className="text-sm text-off-white/70">{row.tool}</span>
                  <span className={`text-xs font-semibold uppercase ${toneClass[row.tone]}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-off-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
              <span>Assessed against APP 1.7</span>
              <span>Reviewed Jul 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIComplianceHero;
