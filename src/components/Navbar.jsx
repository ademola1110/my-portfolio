import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const WhatsAppIcon = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2.667A13.333 13.333 0 0 0 4.473 22.667L2.667 29.333l6.84-1.793A13.333 13.333 0 1 0 16 2.667Z"
        fill="currentColor"
      />

      <path
        d="M23.2 18.76c-.397-.2-2.347-1.16-2.71-1.293-.364-.133-.627-.2-.89.2-.263.4-1.02 1.293-1.25 1.56-.23.267-.46.3-.857.1-.397-.2-1.673-.617-3.187-1.967-1.177-1.05-1.973-2.347-2.203-2.747-.23-.4-.023-.617.173-.817.177-.177.397-.46.597-.69.2-.23.263-.397.397-.66.133-.263.067-.493-.033-.693-.1-.2-.89-2.143-1.22-2.937-.32-.77-.647-.667-.89-.68-.23-.013-.493-.013-.757-.013-.263 0-.69.1-1.053.493-.363.4-1.38 1.35-1.38 3.293s1.413 3.82 1.61 4.083c.2.263 2.78 4.247 6.737 5.953.943.407 1.68.65 2.253.83.947.3 1.807.257 2.487.157.76-.113 2.347-.96 2.677-1.887.33-.927.33-1.72.23-1.887-.097-.177-.36-.277-.757-.477Z"
        fill="white"
      />
    </svg>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappNumber = "2348106448731";

  const whatsappMessage =
    "Hello Ademola, I came across your portfolio and I would like to discuss a project with you.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-black text-slate-950 transition-transform duration-300 group-hover:rotate-6">
              A
            </div>

            <div className="leading-none">
              <span className="block text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                ADEMOLA
                <span className="text-cyan-500 dark:text-cyan-400">.</span>
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />

            <a
              href="https://github.com/ademola1110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <Github size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/ademola-idris-akinola-1660b5425/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <Linkedin size={19} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
              className="rounded-lg p-2.5 text-green-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <WhatsAppIcon size={19} />
            </a>

            <a
              href="#contact"
              className="ml-1 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Hire Me
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-slate-300 p-2.5 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 dark:bg-slate-950/95 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-10 pt-28">
          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Appearance
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Switch between light and dark mode
              </p>
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Social Links */}
          <div className="mt-auto border-t border-slate-200 pt-8 dark:border-slate-800">
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/ademola1110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ademola-idris-akinola-1660b5425/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-600 transition hover:border-green-500 hover:text-green-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-green-500 dark:hover:text-green-400"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </div>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
