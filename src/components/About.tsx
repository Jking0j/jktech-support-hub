import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react";

const features = [
  "Certified IT professionals with 10+ years experience",
  "Custom solutions tailored to your business needs",
  "Transparent pricing with no hidden fees",
  "Remote and on-site support available",
  "24/7 emergency response for critical issues",
  "Regular updates and proactive monitoring",
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime Guaranteed" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technology Partners <span className="text-gradient">You Can Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At JKTechSolutions, we understand that technology is the backbone of modern business. 
              Our team of certified professionals is dedicated to providing reliable, efficient, 
              and secure IT solutions that help your business thrive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-card rounded-xl p-6 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
