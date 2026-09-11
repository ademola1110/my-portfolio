import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Download,
  CheckCircle2,
  Code2,
} from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      period: "Present",
      title: "Freelance Software Developer",
      company: "Freelance",
      description:
        "Building modern, responsive and scalable web applications and digital solutions for individuals, businesses and organizations.",
      highlights: [
        "Full Stack web application development",
        "Frontend and backend development",
        "Responsive web interface development",
        "REST API development and integration",
        "Database-driven applications",
        "Authentication and role-based authorization",
      ],
    },
    {
      period: "2019 – 2026",
      title: "Teacher (Mathematics)",
      company: "AN-NUR International School",
      description:
        "Worked as a Mathematics teacher, developing strong communication, problem-solving, teamwork, leadership and organizational skills.",
      highlights: [
        "Mathematics teaching and instruction",
        "Student engagement and classroom management",
        "Problem solving and analytical thinking",
        "Effective communication",
        "Teamwork and collaboration",
      ],
    },
    {
      period: "2018",
      title: "Construction Site Engineer",
      company: "Radab Builders and Construction Ltd.",
      description:
        "Gained practical experience in building construction, site activities, engineering practice and construction coordination.",
      highlights: [
        "Construction site activities",
        "Building construction",
        "Engineering practice",
        "Site coordination",
        "Construction supervision",
      ],
    },
  ];

  const education = [
    {
      period: "2026",
      title: "Full Stack Web Development",
      institution: "OIC HUB LTD, Osogbo, Osun State",
      description:
        "Professional training in modern frontend and backend web development, including React, Node.js, Express.js, MongoDB and REST APIs.",
    },
    {
      period: "2017",
      title: "Higher National Diploma in Civil Engineering",
      institution: "The Federal Polytechnic Offa, Kwara State",
      description: "CGPA: 3.16 — Upper Credit",
    },
    {
      period: "2014",
      title: "National Diploma in Civil Engineering",
      institution: "The Federal Polytechnic Offa, Kwara State",
      description: "Lower Credit",
    },
  ];

  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "Git & GitHub",
  ];

  const competencies = [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Responsive Web Development",
    "REST API Development",
    "Database Development",
    "Authentication & Authorization",
    "Problem Solving",
    "Teamwork",
    "API Integration",
  ];

  return (
    <section
      id="resume"
      className="bg-slate-100 py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
            My Resume
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Experience & Education
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My professional journey from civil engineering and education to
            full stack software development, combining technical knowledge,
            problem-solving and practical experience.
          </p>
        </motion.div>

        {/* Experience + Education */}
        <div className="grid gap-14 lg:grid-cols-2">
          {/* EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                <BriefcaseBusiness size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Professional Journey
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Work Experience
                </h3>
              </div>
            </div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className="relative border-l border-slate-300 pl-8 dark:border-slate-700"
                >
                  <div
                    className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full ring-4 ring-slate-100 dark:ring-slate-900 ${
                      index === 0 ? "bg-cyan-500 dark:bg-cyan-400" : "bg-slate-400 dark:bg-slate-600"
                    }`}
                  />

                  <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-slate-800 dark:text-cyan-400">
                    {experience.period}
                  </span>

                  <h4 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                    {experience.title}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {experience.company}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {experience.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                <GraduationCap size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Academic Background
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.title}
                  className="relative border-l border-slate-300 pl-8 dark:border-slate-700"
                >
                  <div
                    className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full ring-4 ring-slate-100 dark:ring-slate-900 ${
                      index === 0 ? "bg-cyan-500 dark:bg-cyan-400" : "bg-slate-400 dark:bg-slate-600"
                    }`}
                  />

                  <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-slate-800 dark:text-cyan-400">
                    {item.period}
                  </span>

                  <h4 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item.institution}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {/* Technical Stack */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                <Code2 size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Development Stack
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Technical Skills
                </h3>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Competencies */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                <Award size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Professional Strengths
                </p>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Core Competencies
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {competencies.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-cyan-600 dark:text-cyan-400"
                  />

                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                <Award size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Professional Certification
                </p>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  HSE – Health, Safety and Environment
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Awarded 2018
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:border-cyan-400/20 dark:text-cyan-400">
              Certified
            </span>
          </div>
        </motion.div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/Ademola-Idris-Akinola-CV.pdf"
            download="Ademola-Idris-Akinola-CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <Download size={19} />
            Download My CV
          </a>

          <p className="mt-4 text-sm text-slate-500">
            Full CV available for download
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;