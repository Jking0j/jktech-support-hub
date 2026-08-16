import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AIComplianceContact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || null;
    const practiceSize = formData.get("practiceSize") as string;
    const rawMessage = formData.get("message") as string;

    // Reuses the existing contact_enquiries table (no schema change needed) —
    // tagging the message so enquiries are filterable in the dashboard.
    const message = `[AI Compliance Enquiry, ${practiceSize}]\n\n${rawMessage}`;

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
          {/* Left — framing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Free Scoping Call
            </span>
            <h2 className="font-display text-3xl font-bold text-off-white md:text-4xl lg:text-5xl">
              Find out where you actually stand.
            </h2>
            <p className="mt-6 text-lg text-off-white/70">
              A 30 minute call to understand your current tools and confirm a fixed
              price, no obligation, and if it turns out you're not affected, you'll get
              that in writing too.
            </p>

            <div className="mt-12 border-t border-off-white/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-off-white/50">Contact</p>
              <a
                href="mailto:contact@jktechsolutions.com.au"
                className="mt-2 inline-block font-display text-lg text-off-white hover:text-accent transition-colors"
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
            <h3 className="mb-8 font-display text-xl font-bold">
              Book your scoping call
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="ac-name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                >
                  Full Name
                </label>
                <input
                  id="ac-name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="ac-email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                  >
                    Email
                  </label>
                  <input
                    id="ac-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ac-phone"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="ac-phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="ac-practice-size"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                >
                  Practice Size
                </label>
                <select
                  id="ac-practice-size"
                  name="practiceSize"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-navy-deep focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <option value="" disabled>Select practice size</option>
                  <option value="Solo (1-2)">Solo (1 to 2 practitioners)</option>
                  <option value="Small Clinic (3-8)">Small Clinic (3 to 8 practitioners)</option>
                  <option value="Multi-site (9+)">Multi site (9+ practitioners)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="ac-message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-navy-deep"
                >
                  What AI tools are you currently using, if any?
                </label>
                <textarea
                  id="ac-message"
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
                {isSubmitting ? "Sending…" : "Request Scoping Call"}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Technical audit, not legal advice. Details in the section above.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIComplianceContact;
