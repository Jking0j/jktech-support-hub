import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Server,
  Wrench,
  GraduationCap,
  Building2,
  Home
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Network Security",
    problem: "Worried about hackers, data breaches, or unsecured WiFi?",
    description: "Protect your network from threats with proper firewall configuration, secure WiFi setup, and vulnerability assessments. Built by a degree-qualified network engineer.",
    outcomes: [
      "Firewall setup and hardening",
      "Secure WiFi with proper encryption",
      "Network vulnerability assessments",
      "Guest network isolation",
    ],
    badge: "Degree Qualified",
  },
  {
    icon: Zap,
    title: "Network Optimisation",
    problem: "Slow speeds, dropouts, or buffering ruining your productivity?",
    description: "Get the performance your network should be delivering. We diagnose bottlenecks and optimise your setup for maximum speed and reliability.",
    outcomes: [
      "Speed and latency optimisation",
      "WiFi coverage improvements",
      "Bandwidth management",
      "Dead spot elimination",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Upgrades",
    problem: "Outdated equipment or network not built for growth?",
    description: "Future-proof your network with properly planned infrastructure upgrades. We design and implement solutions that scale with your needs.",
    outcomes: [
      "Network design and planning",
      "Router and switch upgrades",
      "Cabling and access point installation",
      "Seamless migration with zero downtime",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    problem: "Tired of network issues disrupting your day?",
    description: "Keep your network running smoothly with proactive maintenance and responsive support. We monitor, update, and fix issues before they become problems.",
    outcomes: [
      "Proactive network monitoring",
      "Regular firmware and security updates",
      "Fast response to issues",
      "Ongoing performance optimisation",
    ],
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "5-50 staff needing reliable, secure networks that don't break the bank",
  },
  {
    icon: Home,
    title: "Home Networks",
    description: "Work-from-home setups, smart homes, and households wanting better WiFi",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Network Specialist
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            4 Ways We Fix Your <span className="text-gradient">Network Problems</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Degree-qualified network engineer specialising in security, optimisation, 
            and infrastructure upgrades for SMEs and home networks in Perth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-card rounded-xl p-8 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                {service.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {service.badge}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-primary font-medium mb-2 italic">
                {service.problem}
              </p>
              
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 text-sm">
                {service.description}
              </p>
              
              <div className="space-y-2.5 pt-4 border-t border-border/50">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">What you get:</p>
                {service.outcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="text-sm text-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {outcome}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who We Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-display text-2xl font-bold mb-2">Who We Help</h3>
          <p className="text-muted-foreground">Expert network solutions for businesses and homes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gradient-card rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">{audience.title}</h4>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
