import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-900 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Ademola <span className="text-cyan-400">Idris Akinola</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-400">
              Full Stack Web Developer building modern, responsive and
              scalable web applications, digital platforms and custom
              software solutions for individuals, businesses and
              organizations.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/ademola1110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              >
                <Github size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ademola-idris-akinola-1660b5425/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              >
                <Linkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:ademola.idrisakinola1110@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              >
                <Mail size={20} />
              </a>

              {/* Phone */}
              <a
                href="tel:08106448731"
                aria-label="Phone"
                className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="#resume"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    Resume
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-sm text-slate-600 transition hover:text-cyan-400 dark:text-slate-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-slate-600 dark:text-slate-400">
                Full Stack Web Development
              </li>

              <li className="text-sm text-slate-600 dark:text-slate-400">
                Business Websites
              </li>

              <li className="text-sm text-slate-600 dark:text-slate-400">
                E-commerce Solutions
              </li>

              <li className="text-sm text-slate-600 dark:text-slate-400">
                School Management Systems
              </li>

              <li className="text-sm text-slate-600 dark:text-slate-400">
                API & Backend Development
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-6 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <p className="text-sm text-slate-500">
            © {currentYear} Ademola Idris Akinola. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;