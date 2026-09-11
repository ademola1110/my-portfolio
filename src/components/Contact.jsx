import { motion } from "framer-motion";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const whatsappNumber = "2348106448731";

  const whatsappMessage =
    "Hello Ademola, I came across your portfolio and I would like to discuss a project with you.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);

      setError(
        "Sorry, your message could not be sent. Please try again or contact me directly by email.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white sm:py-32"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let's Build Something{" "}
            <span className="text-cyan-500 dark:text-cyan-400">Great</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            Have a project, business idea or development opportunity? I'd love
            to hear about it.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            {/* Availability */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2 text-sm text-green-600 dark:border-green-400/20 dark:bg-green-400/5 dark:text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 dark:bg-green-400" />
              Available for opportunities
            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Let's talk about your project.
            </h3>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Whether you need a website, a complete web application, an
              e-commerce platform or a custom software solution, feel free to
              reach out.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-5">
              {/* Email */}
              <a
                href="mailto:ademola.idrisakinola1110@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-cyan-500 transition group-hover:border-cyan-400/30 dark:border-white/10 dark:bg-slate-950 dark:text-cyan-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-700 transition group-hover:text-cyan-500 dark:text-slate-300 dark:group-hover:text-cyan-400">
                    ademola.idrisakinola1110@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:08106448731"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-cyan-500 transition group-hover:border-cyan-400/30 dark:border-white/10 dark:bg-slate-950 dark:text-cyan-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-700 transition group-hover:text-cyan-500 dark:text-slate-300 dark:group-hover:text-cyan-400">
                    08106448731
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-green-500 transition group-hover:border-green-400/30 dark:border-white/10 dark:bg-slate-950 dark:text-green-400">
                  <span className="text-lg font-bold">WA</span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-slate-700 transition group-hover:text-green-500 dark:text-slate-300 dark:group-hover:text-green-400">
                    Chat with me on WhatsApp
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-cyan-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    Osogbo, Osun State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-500">
                Connect With Me
              </p>

              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/ademola1110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  <Github size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ademola-idris-akinola-1660b5425/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  <Linkedin size={20} />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-green-500 transition hover:border-green-400 hover:bg-green-400/5 dark:border-white/10 dark:bg-slate-950 dark:text-green-400"
                >
                  <span className="text-sm font-bold">WA</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    maxLength={100}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    maxLength={150}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  placeholder="What would you like to build?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50"
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={2000}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/50"
                />

                <p className="mt-2 text-right text-xs text-slate-500 dark:text-slate-600">
                  {formData.message.length}/2000
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-sm text-green-600 dark:border-green-400/20 dark:bg-green-400/5 dark:text-green-400">
                  <CheckCircle2 size={20} className="shrink-0" />

                  <span>
                    Your message has been sent successfully. Thank you for
                    reaching out.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm leading-6 text-red-600 dark:border-red-400/20 dark:bg-red-400/5 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}

                <Send size={18} className={sending ? "animate-pulse" : ""} />
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                I'll get back to you as soon as possible.
              </p>

              {/* WhatsApp Alternative */}
              <div className="mt-6 border-t border-slate-200 pt-6 text-center dark:border-white/10">
                <p className="mb-3 text-sm text-slate-500">
                  Prefer WhatsApp?
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/5 px-6 py-3 font-semibold text-green-600 transition hover:border-green-500 hover:bg-green-500/10 dark:border-green-400/30 dark:bg-green-400/5 dark:text-green-400 dark:hover:border-green-400 dark:hover:bg-green-400/10"
                >
                  <span className="text-sm font-bold">WA</span>
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;