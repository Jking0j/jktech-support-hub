import { motion } from "framer-motion";
import { ListChecks, Share2, ShieldCheck, FileSearch, FileText, ClipboardList } from "lucide-react";

const deliverables = [
  {
    icon: ListChecks,
    title: "AI & Automation Register",
    description: "Every tool touching patient or personal information, mapped in one place.",
  },
  {
    icon: Share2,
    title: "Data Flow Map",
    description: "Where information actually goes, tool by tool — the part that makes gaps visible.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor Assurance Summary",
    description: "Data residency, retention, subprocessors and contract gaps, checked per vendor.",
  },
  {
    icon: FileSearch,
    title: "ADM Assessment",
    description: "A documented, reasoned position for every tool — in scope or not, and why.",
  },
  {
    icon: FileText,
    title: "Draft Privacy Policy Wording",
    description: "Ready for your lawyer to review, adjust, and publish.",
  },
  {
    icon: ClipboardList,
    title: "Remediation Plan",
    description: "What to fix first, and a realistic estimate of what it takes.",
  },
];

const AIComplianceDeliverables = () => {
  return (
    <section id="deliverables" className="bg-navy-deep py-24 text-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What You Get
          </span>
          <h2 className="font-display text-3xl font-bold text-off-white md:text-4xl lg:text-5xl">
            Six documents. One clear position.
          </h2>
          <p className="mt-5 text-lg text-off-white/60">
            Not a certificate — a working evidence pack your practice can maintain and
            your lawyer can stand behind.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col border border-off-white/10 bg-navy-mid/20 p-8 transition-colors hover:bg-navy-mid/40"
            >
              <div className="mb-6 rounded-sm bg-accent/15 p-3 text-accent w-fit">
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-off-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-off-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIComplianceDeliverables;
