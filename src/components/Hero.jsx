import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/10" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-300">
            <Sparkles size={16} />
            Available for freelance & opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            I Build
            <span className="block text-cyan-500 dark:text-cyan-400">
              Modern Web
            </span>
            Applications.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            I'm{" "}
            <span className="font-semibold text-slate-950 dark:text-white">
              Ademola Idris Akinola
            </span>
            , a Full Stack Web Developer focused on building responsive,
            scalable and user-friendly web applications that solve real-world
            problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {/* Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300"
            >
              View My Projects

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/15 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              Let's Work Together
            </a>

            {/* CV */}
            <a
              href="/Ademola-Idris-Akinola-CV.pdf"
              download="Ademola-Idris-Akinola-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-7 py-3.5 font-semibold text-cyan-600 transition hover:border-cyan-500 hover:bg-cyan-500/10 dark:border-cyan-400/30 dark:bg-cyan-400/5 dark:text-cyan-400 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10"
            >
              Download CV
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Developer Card */}
          <div className="relative mx-auto max-w-lg">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-300/30 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-slate-500">
                  developer.js
                </span>

                <Code2 size={16} className="text-slate-500" />
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-8">
                <p className="text-slate-500">
                  01&nbsp;&nbsp;
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{" "}
                  developer = {"{"}
                </p>

                <p className="text-slate-500">
                  02&nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    "Ademola Idris Akinola"
                  </span>
                  ,
                </p>

                <p className="text-slate-500">
                  03&nbsp;&nbsp;&nbsp;&nbsp;role:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    "Full Stack Developer"
                  </span>
                  ,
                </p>

                <p className="text-slate-500">
                  04&nbsp;&nbsp;&nbsp;&nbsp;frontend:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    "React"
                  </span>
                  ,
                </p>

                <p className="text-slate-500">
                  05&nbsp;&nbsp;&nbsp;&nbsp;backend:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    "Node.js"
                  </span>
                  ,
                </p>

                <p className="text-slate-500">
                  06&nbsp;&nbsp;&nbsp;&nbsp;database:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    "MongoDB"
                  </span>
                  ,
                </p>

                <p className="text-slate-500">
                  07&nbsp;&nbsp;&nbsp;&nbsp;passion:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    "Building"
                  </span>
                </p>

                <p className="text-slate-500">08&nbsp;&nbsp;{"}"};</p>

                <p className="mt-3 text-slate-500">
                  09&nbsp;&nbsp;
                  <span className="text-purple-600 dark:text-purple-400">
                    developer
                  </span>
                  .build();
                </p>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 top-20 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/30 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30 sm:block"
            >
              <Code2 className="text-cyan-500 dark:text-cyan-400" size={25} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 bottom-20 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/30 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30 sm:block"
            >
              <Database className="text-blue-500 dark:text-blue-400" size={25} />
            </motion.div>

            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-xl shadow-slate-300/30 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30 sm:flex">
              <Server
                size={20}
                className="text-cyan-500 dark:text-cyan-400"
              />

              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Full Stack Development
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-500 dark:hover:text-cyan-400 sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>

        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;