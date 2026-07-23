import { motion } from "framer-motion";
import { Info, AlertTriangle } from "lucide-react";

const assumedRisky = [
  "AI scribes & note drafting",
  "Automated reminder & recall SMS",
  "Billing and claims automation",
];

const actualRisk = [
  "Intake triage & auto-routing",
  "Waitlist / cancellation ranking",
  "Eligibility & funding screening",
];

const AIComplianceProblem = () => {
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
            Where The Risk Actually Sits
          </span>
          <h2 className="font-display text-3xl font-bold text-navy-deep md:text-4xl lg:text-5xl">
            Your scribe probably isn't the problem.
          </h2>
          <p className="mt-5 text-lg text-navy-mid">
            Most practices assume their documentation tool is the compliance risk. In
            practice, a tool that drafts a note for a clinician to review usually isn't
            making a decision at all — the risk sits with tools that determine what
            happens next, before a patient has a say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border-l-4 border-border bg-card p-6 shadow-card"
          >
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Commonly Assumed Risky
            </h4>
            <ul className="space-y-3">
              {assumedRisky.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-mid/80">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Usually assistive, not decisional — provided a clinician genuinely reviews
              the output before it takes effect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-sm border-l-4 border-accent bg-navy-deep p-6 shadow-elevated"
          >
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-accent">
              What's Actually In Scope
            </h4>
            <ul className="space-y-3">
              {actualRisk.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-off-white/85">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-off-white/60">
              These affect a patient's access to a service — the exact trigger the new
              disclosure rule is built around.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIComplianceProblem;
