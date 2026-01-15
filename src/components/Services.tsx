import { motion } from "framer-motion";
import { 
  Network, 
  Shield, 
  Cloud, 
  Globe, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "IT Support & Networking",
    description: "Complete network solutions from design to deployment.",
    features: [
      "Network design, setup, and optimisation",
      "Wired and wireless infrastructure deployment",
      "Router, switch, and firewall configuration",
      "Network troubleshooting and performance improvement",
      "Device, printer, and peripheral integration",
    ],
  },
  {
    icon: Shield,
    title: "Cyber Security Fundamentals",
    description: "Protect your business with comprehensive security solutions.",
    features: [
      "Network and system security assessments",
      "Firewall and perimeter security configuration",
      "Endpoint protection and access control",
      "Multi-factor authentication (MFA) deployment",
      "Data backup and recovery solutions",
      "Security best-practice implementation",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365 Solutions",
    description: "Seamless cloud migration and Microsoft 365 expertise.",
    features: [
      "Microsoft 365 tenant setup and migration",
      "Identity and access management (Entra ID)",
      "Secure email and collaboration configuration",
      "SharePoint and OneDrive deployment",
      "Cloud-based backup solutions",
    ],
  },
  {
    icon: Globe,
    title: "Website & Digital Infrastructure",
    description: "Professional web presence and digital solutions.",
    features: [
      "Business website deployment and hosting",
      "Domain management and SSL implementation",
      "Website security hardening and maintenance",
      "Cloud hosting support",
    ],
  },
  {
    icon: Wrench,
    title: "Ongoing IT Maintenance",
    description: "Proactive maintenance to keep your systems running smoothly.",
    features: [
      "Ongoing IT support and system maintenance",
      "Patch management and system updates",
      "Preventative monitoring and issue resolution",
      "Scheduled technical health checks",
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
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
