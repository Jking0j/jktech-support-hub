import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Server,
  Wrench,
  Building2,
  Home,
  GraduationCap,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Network Security",
    description:
      "Firewall hardening, secure WiFi, and vulnerability assessments — built by a degree-qualified network engineer.",
    badge: "Degree Qualified",
  },
  {
    icon: Zap,
    title: "Network Optimisation",
    description:
      "Diagnose bottlenecks and get the performance your network should already be delivering.",
  },
  {
    icon: Server,
    title: "Infrastructure Upgrades",
    description:
      "Design and implement scalable network infrastructure that grows with your business.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, updates, and rapid response so issues never become downtime.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions & Integrations",
    description:
      "Identify, implement, and integrate AI tools that streamline operations and boost productivity.",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "5–50 staff needing reliable, secure networks that don't break the bank.",
  },
  {
    icon: Home,
    title: "Home Networks",
    description: "Work-from-home setups, smart homes, and households wanting better WiFi.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-navy-deep py-24 text-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Services
          </span>
          <h2 className="font-display text-3xl font-bold text-off-white md:text-4xl lg:text-5xl">
            Five ways we fix your network.
          </h2>
          <p className="mt-5 text-lg text-off-white/60">
            Specialised network solutions for Perth SMEs and home networks.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col border border-off-white/10 bg-navy-mid/20 p-8 transition-colors hover:bg-navy-mid/40"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-sm bg-accent/15 p-3 text-accent">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                {service.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                    <GraduationCap className="h-3 w-3" />
                    {service.badge}
                  </span>
                )}
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-off-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-off-white/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who we help */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-display text-2xl font-bold text-off-white"
          >
            Who we help
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-2">
            {audiences.map((a, index) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-5 border-l-2 border-accent bg-navy-mid/20 p-6"
              >
                <div className="rounded-sm bg-accent/15 p-3 text-accent flex-shrink-0">
                  <a.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="mb-1 font-display font-bold text-off-white">{a.title}</h4>
                  <p className="text-sm text-off-white/60">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
