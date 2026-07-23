const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t border-off-white/10 py-16 text-off-white/60">
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
              Professional network security, optimisation, and infrastructure for Perth
              SMEs and home networks. Also supporting allied health practices with AI
              compliance.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-off-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Network Security</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Network Optimisation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Infrastructure Upgrades</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Maintenance & Support</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">AI Solutions</a></li>
              <li><a href="/ai-compliance" className="hover:text-accent transition-colors">AI Compliance Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-off-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-off-white">
              Contact
            </h4>
            <a
              href="mailto:support@jktechsolutions.com.au"
              className="block text-sm font-medium text-off-white hover:text-accent transition-colors"
            >
              support@jktechsolutions.com.au
            </a>
            <p className="mt-2 text-sm">Perth, Western Australia</p>
          </div>
        </div>

        <div className="mt-16 border-t border-off-white/10 pt-8 text-center text-[10px] uppercase tracking-widest">
          © {year} JKTechSolutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
