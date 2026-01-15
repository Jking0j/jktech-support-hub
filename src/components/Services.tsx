import { motion } from "framer-motion";
import { 
  Monitor, 
  Shield, 
  Cloud, 
  Wrench, 
  Network, 
  HardDrive 
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desktop Support",
    description: "Fast resolution for all your computer issues, from software glitches to hardware failures.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with advanced threat detection, firewalls, and security audits.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless migration and management of cloud infrastructure for scalable operations.",
  },
  {
    icon: Wrench,
    title: "IT Maintenance",
    description: "Proactive maintenance to prevent issues before they impact your business.",
  },
  {
    icon: Network,
    title: "Network Setup",
    description: "Complete network design, installation, and optimization for peak performance.",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description: "Expert data recovery services to retrieve your critical business information.",
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
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive Tech <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From day-to-day support to complex infrastructure projects, 
            we have the expertise to keep your technology running smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
