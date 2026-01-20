import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Amanda Harris",
    role: "Owner, Roleystone Family Medical Centre",
    content: "JKTechSolutions has been instrumental in managing our entire IT infrastructure. From patient data security to seamless network connectivity across our practice, they handle everything professionally. Our staff can focus on patient care knowing our systems are in expert hands.",
    rating: 5,
  },
  {
    name: "Steve & Karen Williams",
    role: "Roleystone Homeowners",
    content: "Our home WiFi was a nightmare with constant dropouts. JKTechSolutions came out, optimised our network setup, and now we have perfect coverage throughout the house. Brilliant service!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Work From Home Professional",
    content: "Needed my home office network sorted for video calls and large file transfers. They set up everything perfectly and even helped secure our smart home devices. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Local Resident",
    content: "Quick response when our home network went down. They diagnosed the issue remotely and had us back online within the hour. Fair pricing and genuinely helpful advice.",
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by businesses of all sizes for reliable IT support and innovative tech solutions.
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
                  
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
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
