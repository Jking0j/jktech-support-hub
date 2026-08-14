import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const steps = [
  {
    n: "01",
    title: "A short call",
    desc: "Fifteen minutes to understand your setup, your team size, and what's actually causing problems.",
  },
  {
    n: "02",
    title: "On-site review",
    desc: "We come to you and go through the network, hardware, backups and access controls properly.",
  },
  {
    n: "03",
    title: "Written findings",
    desc: "A plain-English list of what's sound, what's a risk, and what it would cost to address.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || null;
    const message = formData.get("message") as string;

    const { error } = await supabase
      .from("contact_enquiries")
      .insert({ name, email, phone, message });

    if (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Request received",
        description: "We'll reply within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-navy-deep py-24 text-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Getting started
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-off-white md:text-4xl lg:text-5xl">
              Start with a review.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-off-white/70">
              An hour on site, going through your systems, ending in a written summary
              of what we found. There's no charge for it and no obligation afterwards.
            </p>

            <div className="mt-12 border-t border-off-white/10">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6 border-b border-off-white/10 py-6">
                  <span className="font-mono text-sm text-accent">{step.n}</span>
                  <div>
                    <h4 className="font-display text-base font-bold text-off-white">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-off-white/60">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
                Contact
              </p>
              <a
                href="mailto:contact@jktechsolutions.com.au"
                className="mt-2 inline-block font-display text-lg text-off-white transition-colors hover:text-accent"
              >
                contact@jktechsolutions.com.au
              </a>
              <p className="mt-1 text-sm text-off-white/60">Perth, Western Australia</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-sm bg-card p-10 text-navy-deep shadow-elevated"
          >
            <h3 className="mb-8 font-display text-xl font-bold">Send an enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                >
                  What are you trying to sort out?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-navy-deep px-6 py-4 text-sm font-bold uppercase tracking-wider text-off-white transition-colors hover:bg-navy-mid disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send enquiry"}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Replies usually come back within one business day.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
