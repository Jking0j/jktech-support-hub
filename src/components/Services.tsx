import { motion } from "framer-motion";
import { 
  Headphones, 
  Shield, 
  Cloud, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "IT Support That Actually Responds",
    problem: "Tired of waiting days for IT help while your team can't work?",
    description: "Get your team back online fast. We respond in under 60 minutes and fix issues remotely or on-site—so your business keeps running.",
    outcomes: [
      "Less downtime = more productive staff",
      "No more chasing technicians for updates",
      "Local Perth support, not offshore call centres",
    ],
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
    title: "Proactive Maintenance",
    problem: "Sick of things breaking and costing you money?",
    description: "We monitor and maintain your systems so problems get fixed before they become emergencies.",
    outcomes: [
      "Fewer surprises and emergency callouts",
      "Systems that stay fast and up-to-date",
      "Monthly health checks and reports",
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
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
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
