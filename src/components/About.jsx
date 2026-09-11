import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Layers3,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Code2 size={22} />,
      number: "10+",
      label: "Technologies",
    },
    {
      icon: <Layers3 size={22} />,
      number: "5+",
      label: "Projects Built",
    },
    {
      icon: <BriefcaseBusiness size={22} />,
      number: "3+",
      label: "Development Areas",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-300 sm:py-32 dark:bg-slate-900 dark:text-white"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            A Full Stack Web Developer focused on building modern, responsive
            and scalable digital solutions that solve real-world problems.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left - Developer Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-300/30 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950 dark:shadow-black/20">
                {/* Top */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Developer
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
                      Ademola Idris Akinola
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                    <Code2
                      className="text-cyan-600 dark:text-cyan-400"
                      size={26}
                    />
                  </div>
                </div>

                {/* Code-style information */}
                <div className="space-y-4 font-mono text-sm">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                    <p className="text-slate-500">specialization</p>

                    <p className="mt-1 text-cyan-600 dark:text-cyan-400">
                      Full Stack Web Development
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                    <p className="text-slate-500">frontend</p>

                    <p className="mt-1 text-slate-800 dark:text-white">
                      React + JavaScript + Tailwind CSS
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                    <p className="text-slate-500">backend</p>

                    <p className="mt-1 text-slate-800 dark:text-white">
                      Node.js + Express.js
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                    <p className="text-slate-500">database</p>

                    <p className="mt-1 text-slate-800 dark:text-white">
                      MongoDB + Mongoose
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative card */}
              <motion.div
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 -z-0 h-28 w-28 rounded-3xl border border-cyan-500/10 bg-cyan-500/5 dark:border-cyan-400/10 dark:bg-cyan-400/5"
              />

              <div className="absolute -left-5 -top-5 -z-10 h-24 w-24 rounded-full border border-cyan-500/10 dark:border-cyan-400/10" />
            </div>
          </motion.div>

          {/* Right - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Who I Am
            </p>

            <h3 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl dark:text-white">
              Turning ideas into
              <span className="text-cyan-500 dark:text-cyan-400">
                {" "}
                real digital solutions.
              </span>
            </h3>

            <div className="mt-6 space-y-5 leading-8 text-slate-600 dark:text-slate-400">
              <p>
                I'm Ademola Idris Akinola, a Full Stack Web Developer passionate
                about designing and developing modern web applications that are
                functional, responsive and easy to use.
              </p>

              <p>
                I work across both the frontend and backend of applications,
                allowing me to understand the complete development process —
                from creating intuitive user interfaces to building APIs,
                managing databases and integrating essential services.
              </p>

              <p>
                My goal is to build technology that doesn't just look good, but
                also solves real problems, improves business processes and
                provides a better experience for users.
              </p>
            </div>

            {/* Education / Development */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <GraduationCap
                  size={24}
                  className="text-cyan-600 dark:text-cyan-400"
                />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Continuous Learning
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Continuously improving my skills and exploring modern
                  technologies to build better software solutions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300"
              >
                Explore My Work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/Ademola-Idris-Akinola-CV.pdf"
                download="Ademola-Idris-Akinola-CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid gap-5 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:border-cyan-400/30"
            >
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                {stat.icon}
              </div>

              <h4 className="text-3xl font-bold text-slate-950 dark:text-white">
                {stat.number}
              </h4>

              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;