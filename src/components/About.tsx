import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const differentiators = [
  { bad: "Offshore call centres", good: "Local Perth-based support" },
  { bad: "12-month lock-in contracts", good: "Month-to-month, cancel anytime" },
  { bad: "Days waiting for a response", good: "Under 60 minute response time" },
  { bad: "Jargon and upselling", good: "Plain English, honest advice" },
  { bad: "Generic solutions", good: "Tailored for businesses with 5-50 staff" },
  { bad: "Just fixing symptoms", good: "Finding and fixing the root cause" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Why We're Different
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We're Not Like <span className="text-gradient">Other IT Companies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Run by a degree-qualified IT professional who got tired of seeing small businesses 
              get overcharged and underserved by big IT companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.good}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-card rounded-lg p-5 border border-border"
              >
                <div className="flex items-start gap-3 mb-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm line-through">{item.bad}</span>
                </div>
                <div className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.good}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
