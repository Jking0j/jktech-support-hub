import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    label: "01",
    title: "Managed IT & infrastructure",
    audience: "Perth businesses, 5 to 50 staff",
    description:
      "Ongoing support, network design and hardening, hardware refreshes, and the infrastructure work that sits underneath it.",
    points: [
      "Switching, routing and firewall configuration",
      "Secure wireless and structured cabling",
      "Windows domain, Group Policy and Microsoft 365",
      "Endpoint reimaging and lifecycle management",
    ],
  },
  {
    label: "02",
    title: "AI compliance audits",
    audience: "Allied health practices",
    description:
      "A technical assessment of the AI and automated tools in your practice, documented against the Privacy Act amendments taking effect in December.",
    points: [
      "AI and automation tool register",
      "Data flow mapping per tool",
      "Vendor residency and retention checks",
      "Documented assessment for your lawyer to review",
    ],
    href: "/ai-compliance",
    cta: "See the full scope",
  },
  {
    label: "03",
    title: "Website design & builds",
    audience: "New and growing businesses",
    description:
      "A custom built website for your business, from a short brief through to a live, working site. No templates, no bloated page builders.",
    points: [
      "Custom design matched to your brand",
      "Mobile responsive, fast loading pages",
      "Domain name setup and registration",
      "Ongoing updates and maintenance",
    ],
    href: "/intake.html",
    cta: "Start your website brief",
    external: true,
  },
];

const stack = [
  { group: "Switching & routing", items: ["Cisco Catalyst", "Cisco Meraki", "Juniper EX"] },
  { group: "Wireless & voice", items: ["Cisco Aironet", "Meraki AP", "Yealink VoIP"] },
  { group: "Security", items: ["Firewall deployment", "Network segmentation", "VLAN design"] },
  { group: "Data sanitisation", items: ["NIST 800-88", "Blancco", "Erasure certificates"] },
  { group: "Microsoft", items: ["Windows Server", "Active Directory", "Microsoft 365"] },
  { group: "Endpoint", items: ["Dell", "Lenovo", "Imaging & deployment"] },
];

const Services = () => {
  return (
    <section id="services" className="bg-navy-deep py-24 text-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            What we do
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-off-white md:text-4xl lg:text-5xl">
            Three kinds of work.
          </h2>
        </motion.div>

        {/* Tracks */}
        <div className="grid gap-px bg-off-white/10 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col bg-navy-deep p-8 lg:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-accent">{track.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-off-white/40">
                  {track.audience}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-off-white">
                {track.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-off-white/60">
                {track.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-off-white/10 pt-6">
                {track.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-off-white/75">
                    <span className="mt-2 h-px w-3 flex-shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {track.href && (
                track.external ? (
                  <a
                    href={track.href}
                    className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-off-white"
                  >
                    {track.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    to={track.href}
                    className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-off-white"
                  >
                    {track.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )
              )}
            </motion.div>
          ))}
        </div>

        {/* Capability index */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-wrap items-baseline justify-between gap-4 border-b border-off-white/15 pb-5"
          >
            <h3 className="font-display text-2xl font-bold text-off-white">
              Equipment and platforms
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/40">
              Hands on, in production environments
            </p>
          </motion.div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((column, index) => (
              <motion.div
                key={column.group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {column.group}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {column.items.map((item) => (
                    <li key={item} className="text-sm text-off-white/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
