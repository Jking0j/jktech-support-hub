import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-deep">
            <span className="font-display text-sm font-bold text-off-white">JK</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-navy-deep">
            JKTechSolutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-navy-mid transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <div className="h-4 w-px bg-border" />
          <a
            href="mailto:support@jktechsolutions.com.au"
            className="text-xs font-medium uppercase tracking-wider text-accent hover:text-navy-deep transition-colors"
          >
            support@jktechsolutions.com.au
          </a>
          <button
            onClick={scrollToContact}
            className="rounded-sm bg-navy-deep px-5 py-2.5 text-sm font-semibold text-off-white transition-colors hover:bg-navy-mid"
          >
            Get Support
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-navy-deep"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-navy-mid hover:text-accent transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:support@jktechsolutions.com.au"
                className="text-sm text-accent"
              >
                support@jktechsolutions.com.au
              </a>
              <button
                onClick={scrollToContact}
                className="rounded-sm bg-navy-deep px-5 py-3 text-sm font-semibold text-off-white"
              >
                Get Support
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
