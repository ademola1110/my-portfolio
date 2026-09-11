import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Layers3,
  ShoppingCart,
  Smartphone,
  Wrench,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe size={26} />,
      title: "Business Websites",
      description:
        "Professional, responsive websites that help businesses establish a strong online presence and attract customers.",
      features: [
        "Responsive design",
        "Modern UI",
        "Contact forms",
        "SEO-friendly setup",
      ],
    },
    {
      icon: <Code2 size={26} />,
      title: "Full Stack Web Applications",
      description:
        "Complete web applications with modern frontend interfaces, backend APIs, databases and authentication.",
      features: [
        "Frontend development",
        "Backend development",
        "REST APIs",
        "Database integration",
      ],
    },
    {
      icon: <ShoppingCart size={26} />,
      title: "E-commerce Solutions",
      description:
        "Online stores that allow businesses to showcase products, manage customers and accept payments.",
      features: [
        "Product management",
        "Shopping cart",
        "Payment integration",
        "Order management",
      ],
    },
    {
      icon: <GraduationCap size={26} />,
      title: "School Management Systems",
      description:
        "Complete digital platforms that help schools manage students, teachers, classes, attendance, results, admissions and administrative operations.",
      features: [
        "Student management",
        "Teacher & class management",
        "Results & attendance",
        "Admin dashboard",
      ],
    },
    {
      icon: <BarChart3 size={26} />,
      title: "Admin Dashboards",
      description:
        "Powerful dashboards that make it easier for organizations to manage users, data, transactions and operations.",
      features: [
        "Analytics",
        "User management",
        "Data management",
        "Role-based access",
      ],
    },
    {
      icon: <Database size={26} />,
      title: "API & Backend Development",
      description:
        "Secure and scalable backend systems that connect applications to databases and external services.",
      features: [
        "REST APIs",
        "Authentication",
        "Role-based authorization",
        "Third-party integrations",
      ],
    },
    {
      icon: <Smartphone size={26} />,
      title: "Responsive Web Design",
      description:
        "Web applications that provide a smooth experience across mobile phones, tablets and desktop computers.",
      features: [
        "Mobile-first design",
        "Cross-device compatibility",
        "Flexible layouts",
        "Modern interfaces",
      ],
    },
    {
      icon: <Wrench size={26} />,
      title: "Web Application Support",
      description:
        "Ongoing technical support, bug fixes, improvements and updates to keep web applications secure, reliable and up to date.",
      features: [
        "Bug fixing",
        "Feature updates",
        "Performance improvements",
        "Technical support",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

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
            What I Do
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Services I{" "}
            <span className="text-cyan-600 dark:text-cyan-400">Provide</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            I help businesses, organizations and individuals turn their ideas
            into reliable digital products and web solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-100/50 dark:border-white/10 dark:bg-slate-900 dark:shadow-none dark:hover:border-cyan-400/30"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-600 transition duration-300 group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-400/10 dark:text-cyan-400 dark:group-hover:text-slate-950">
                  {service.icon}
                </div>

                <span className="text-xs font-medium text-slate-400 dark:text-slate-600">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {service.description}
              </p>

              {/* Features */}
              <div className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-auto pt-7">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  Discuss a Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyan-50 p-8 transition-colors duration-300 dark:border-cyan-400/20 dark:bg-cyan-400/5 sm:p-10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <Layers3
                  size={24}
                  className="text-cyan-600 dark:text-cyan-400"
                />

                <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  Have an idea?
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Let's turn your idea into a working product.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                Whether you need a business website, an e-commerce platform, a
                school management system or a custom web application, let's
                discuss your requirements.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;