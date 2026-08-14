import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-navy-accent/40 bg-navy-deep text-off-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy-accent">
                <span className="font-display text-xs font-bold text-off-white">JK</span>
              </div>
              <span className="font-display text-lg font-bold text-off-white">
                JKTechSolutions
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Network infrastructure, IT support and AI compliance auditing for
              businesses in Perth, Western Australia.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-off-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#services" className="transition-colors hover:text-navy-accent">Managed IT &amp; support</a></li>
              <li><a href="/#services" className="transition-colors hover:text-navy-accent">Network infrastructure</a></li>
              <li><a href="/#services" className="transition-colors hover:text-navy-accent">Secure decommissioning</a></li>
              <li><Link to="/ai-compliance" className="transition-colors hover:text-navy-accent">AI compliance audits</Link></li>
              <li><a href="/intake.html" className="transition-colors hover:text-navy-accent">Website design</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-off-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="transition-colors hover:text-navy-accent">How we work</a></li>
              <li><a href="/#testimonials" className="transition-colors hover:text-navy-accent">Client feedback</a></li>
              <li><a href="/#contact" className="transition-colors hover:text-navy-accent">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-off-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy-accent" />
                <a
                  href="mailto:contact@jktechsolutions.com.au"
                  className="font-medium text-off-white transition-colors hover:text-navy-accent"
                >
                  contact@jktechsolutions.com.au
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-accent" />
                <span>Perth, Western Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-off-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.18em] sm:flex-row sm:justify-between">
          <span>&copy; {year} JKTechSolutions. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/#services" className="transition-colors hover:text-navy-accent">Services</a>
            <a href="/#about" className="transition-colors hover:text-navy-accent">About</a>
            <a href="/#contact" className="transition-colors hover:text-navy-accent">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
