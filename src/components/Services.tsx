import { motion } from "framer-motion";
import { 
  Network, 
  Shield, 
  Cloud, 
  Wrench,
  GraduationCap
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Networking & Infrastructure",
    problem: "Network slow, dropping out, or just not built for growth?",
    description: "Built by a degree-qualified network engineer. We design, install, and optimise networks that actually perform—not just 'work'.",
    outcomes: [
      "Faster, more reliable connections for your team",
      "Proper network design that scales with you",
      "Infrastructure upgrades done right the first time",
    ],
    badge: "Degree Qualified",
  },
  {
    icon: Shield,
    title: "Security That Stops the Threats",
    problem: "Worried about phishing emails, ransomware, or data breaches?",
    description: "Protect your business before it's too late. We implement real security measures that stop threats—not just tick boxes.",
    outcomes: [
      "Stop worrying about phishing and breaches",
      "Secure backups so you never lose data",
      "Staff trained to spot scams before they click",
    ],
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Done Right",
    problem: "Paying for Microsoft 365 but not getting the full value?",
    description: "We set up and manage your Microsoft 365 properly—so your team can collaborate securely from anywhere.",
    outcomes: [
      "Email that works, every time",
      "Secure file sharing with SharePoint & OneDrive",
      "Proper access controls and user management",
    ],
  },
  {
    icon: Wrench,
    title: "IT Support & Maintenance",
    problem: "Tired of waiting days for IT help or things constantly breaking?",
    description: "We respond in under 60 minutes and proactively maintain your systems so problems get fixed before they become emergencies.",
    outcomes: [
      "Less downtime = more productive staff",
      "Fewer surprises and emergency callouts",
      "Local Perth support, not offshore call centres",
    ],
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
            What We Fix
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            4 Ways We Keep Your <span className="text-gradient">Business Running</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't do everything. We do these four things exceptionally well 
            for small businesses who can't afford IT problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <p className="text-muted-foreground mb-5">
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
      </div>
    </section>
  );
};

export default Services;
