import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-off-white/10 bg-navy-deep py-16 text-off-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent">
                <span className="font-display text-xs font-bold text-off-white">JK</span>
              </div>
              <span className="font-display text-lg font-bold text-off-white">
                JKTechSolutions
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Network infrastructure, IT support and AI compliance auditing for
              businesses in Perth, Western Australia.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#services" className="transition-colors hover:text-accent">Managed IT &amp; support</a></li>
              <li><a href="/#services" className="transition-colors hover:text-accent">Network infrastructure</a></li>
              <li><a href="/#services" className="transition-colors hover:text-accent">Secure decommissioning</a></li>
              <li><Link to="/ai-compliance" className="transition-colors hover:text-accent">AI compliance audits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="transition-colors hover:text-accent">How we work</a></li>
              <li><a href="/#testimonials" className="transition-colors hover:text-accent">Client feedback</a></li>
              <li><a href="/#contact" className="transition-colors hover:text-accent">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white">
              Contact
            </h4>
            <a
              href="mailto:support@jktechsolutions.com.au"
              className="block text-sm font-medium text-off-white transition-colors hover:text-accent"
            >
              support@jktechsolutions.com.au
            </a>
            <p className="mt-2 text-sm">Perth, Western Australia</p>
          </div>
        </div>

        <div className="mt-16 border-t border-off-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.18em]">
          © {year} JKTechSolutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
