import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      description:
        "Building responsive, interactive and user-friendly interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "UI Development",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      description:
        "Creating secure APIs, server-side applications and business logic.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Authorization",
        "API Integration",
      ],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      description: "Designing and managing data for reliable web applications.",
      skills: [
        "MongoDB",
        "Mongoose",
        "Database Design",
        "CRUD Operations",
        "Data Modeling",
        "Data Validation",
      ],
    },
    {
      title: "Development Tools",
      icon: <Wrench size={24} />,
      description:
        "Using modern tools to develop, test and maintain applications.",
      skills: ["Git", "GitHub", "VS Code", "Postman", "NPM", "Debugging"],
    },
    {
      title: "Application Development",
      icon: <Layers3 size={24} />,
      description:
        "Connecting frontend, backend, databases and third-party services.",
      skills: [
        "Full Stack Applications",
        "Admin Dashboards",
        "Payment Integration",
        "Authentication Systems",
        "Role-Based Access",
      ],
    },
    {
      title: "Web Engineering",
      icon: <Globe size={24} />,
      description:
        "Building applications with performance, usability and scalability in mind.",
      skills: [
        "Responsive Web Apps",
        "Component Architecture",
        "REST API Development",
        "Form Validation",
        "Error Handling",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Skills & <span className="text-cyan-600 dark:text-cyan-400">Technologies</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            I work across the full web development stack, combining frontend
            interfaces, backend systems, databases and APIs to build complete
            digital solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-100/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-2xl dark:hover:shadow-cyan-950/20"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/10 p-3 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white dark:border-cyan-400/10 dark:bg-cyan-400/10 dark:text-cyan-400 dark:group-hover:text-slate-950">
                  {category.icon}
                </div>

                <span className="font-mono text-xs text-slate-400 dark:text-slate-600">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {category.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-cyan-400/30 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:shadow-none"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Braces className="text-cyan-600 dark:text-cyan-400" size={24} />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  My Development Stack
                </h3>
              </div>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Technologies I use to turn ideas into complete, production-ready
                web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/10 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-700 dark:border-cyan-400/10 dark:bg-cyan-400/5 dark:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center text-center"
        >
          <GitBranch className="mb-4 text-cyan-600 dark:text-cyan-400" size={28} />

          <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-500">
            I continuously learn and improve my development skills as technology
            evolves, with a focus on writing clean, maintainable and scalable
            code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;