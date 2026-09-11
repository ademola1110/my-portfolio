import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, CheckCircle2, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Event Ticketing Platform",
    shortDescription:
      "A full-stack event management and ticketing platform for discovering events, booking tickets, and managing events.",
    description:
      "A complete event ticketing platform that allows users to discover events, book tickets, make payments, and access digital tickets. Organizers can create and manage events, monitor bookings, and manage attendees through a dedicated dashboard.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Paystack",
      "Tailwind CSS",
      "QR Code",
    ],
    features: [
      "User registration and authentication",
      "Event discovery and search",
      "Event details pages",
      "Online ticket booking",
      "Paystack payment integration",
      "Digital QR-code tickets",
      "Organizer dashboard",
      "Booking management",
      "Ticket management",
    ],
    role: "Full Stack Developer",
    github: null,
    liveDemo: null,
  },

  // {
  //   id: 2,
  //   title: "School Management System",
  //   shortDescription:
  //     "A digital school management platform for managing students, teachers, classes, attendance, results, and administration.",
  //   description:
  //     "A comprehensive school management solution designed to help educational institutions manage their daily academic and administrative operations from one centralized platform.",
  //   image:
  //     "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind CSS",
  //     "REST API",
  //   ],
  //   features: [
  //     "Student management",
  //     "Teacher management",
  //     "Class management",
  //     "Attendance management",
  //     "Result management",
  //     "Admin dashboard",
  //     "Online admission",
  //     "Parent portal",
  //     "Fees and payment management",
  //   ],
  //   role: "Full Stack Developer",
  //   github: null,
  //   liveDemo: null,
  // },

  {
    id: 3,
    title: "RIT Business E-commerce",
    shortDescription:
      "A responsive e-commerce website with product browsing, search, shopping cart, authentication, and payment integration.",
    description:
      "A modern e-commerce platform designed for businesses to showcase and sell products online. The application includes product discovery, search, shopping cart functionality, authentication, payment integration, and responsive user interfaces.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "LocalStorage",
      "Paystack",
    ],
    features: [
      "Product listing",
      "Product search",
      "Shopping cart",
      "Cart quantity management",
      "Authentication pages",
      "Local storage",
      "Payment integration",
      "Responsive design",
      "Product API integration",
    ],
    role: "Frontend Developer",
    github: null,
    liveDemo: null,
  },

  // {
  //   id: 4,
  //   title: "Business Management Dashboard",
  //   shortDescription:
  //     "A modern administrative dashboard for monitoring business activities, managing data, and viewing important business metrics.",
  //   description:
  //     "A responsive business management dashboard designed to provide administrators with a centralized interface for monitoring operations, managing records, and viewing important business information.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  //   technologies: [
  //     "React",
  //     "Tailwind CSS",
  //     "JavaScript",
  //     "REST API",
  //     "Lucide React",
  //   ],
  //   features: [
  //     "Responsive dashboard",
  //     "Statistics overview",
  //     "Data management",
  //     "Navigation system",
  //     "Reusable components",
  //     "Responsive tables",
  //     "Modern UI",
  //   ],
  //   role: "Frontend Developer",
  //   github: null,
  //   liveDemo: null,
  // },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal when the Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);

      // Prevent background scrolling while modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Projects I’ve Built
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A selection of applications and digital solutions I have designed
            and developed using modern web technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-sm font-medium text-cyan-400 backdrop-blur">
                Featured Project
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Full Stack Application
              </p>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {projects[0].title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                {projects[0].description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedProject(projects[0])}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View Project
                  <ExternalLink size={17} />
                </button>

                {projects[0].github && (
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur">
                  <Code2 size={14} />
                  {project.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500 hover:text-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                  >
                    View Details
                    <ExternalLink size={16} />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 dark:shadow-none sm:p-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Let’s turn your idea into a modern, scalable and user-friendly
            digital solution.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Let’s Work Together
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-5 top-5 z-10 rounded-full border border-slate-300 bg-white/90 p-2 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950/90 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="h-64 overflow-hidden sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-7 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  {selectedProject.role}
                </p>

                <h3
                  id="project-modal-title"
                  className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                    Key Features
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-500 dark:text-cyan-400"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Buttons */}
                {(selectedProject.github || selectedProject.liveDemo) && (
                  <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-200 pt-7 dark:border-slate-800">
                    {/* GitHub */}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500 hover:text-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    )}

                    {/* Live Demo */}
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
