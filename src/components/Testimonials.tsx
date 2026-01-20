import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Practice Manager",
    role: "Roleystone Family Medical Centre",
    content: "They took over our entire IT setup and the difference is night and day. Our staff used to complain about IT weekly—now they don't even think about it. System outages are basically zero.",
    outcome: "Zero IT complaints from staff",
    rating: 5,
  },
  {
    name: "Steve Williams",
    role: "Home Office, Armadale",
    content: "Had WiFi dead spots killing my video calls for months. They came out, fixed it properly, and now I have perfect coverage everywhere. Should have called them sooner.",
    outcome: "Perfect WiFi coverage throughout",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Remote Worker, Kelmscott",
    content: "Set up my home office so video calls actually work. Quick response, explained everything in plain English, and didn't try to sell me stuff I didn't need.",
    outcome: "Reliable video calls, finally",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Small Business, Gosnells",
    content: "Our network went down on a Friday afternoon—nightmare scenario. They had us back online within the hour. That kind of response time is exactly what small businesses need.",
    outcome: "Back online within 60 minutes",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results From <span className="text-gradient">Real Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Perth businesses and households who stopped struggling with IT.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />
                  
                  <p className="text-foreground/90 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    Result: {testimonial.outcome}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
