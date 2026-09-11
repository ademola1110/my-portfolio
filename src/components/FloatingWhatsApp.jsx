import { X } from "lucide-react";
import { useState } from "react";
const WhatsAppIcon = ({ size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {" "}
      <path
        d="M16 2.667A13.333 13.333 0 0 0 4.473 22.667L2.667 29.333l6.84-1.793A13.333 13.333 0 1 0 16 2.667Z"
        fill="currentColor"
      />{" "}
      <path
        d="M23.2 18.76c-.397-.2-2.347-1.16-2.71-1.293-.364-.133-.627-.2-.89.2-.263.4-1.02 1.293-1.25 1.56-.23.267-.46.3-.857.1-.397-.2-1.673-.617-3.187-1.967-1.177-1.05-1.973-2.347-2.203-2.747-.23-.4-.023-.617.173-.817.177-.177.397-.46.597-.69.2-.23.263-.397.397-.66.133-.263.067-.493-.033-.693-.1-.2-.89-2.143-1.22-2.937-.32-.77-.647-.667-.89-.68-.23-.013-.493-.013-.757-.013-.263 0-.69.1-1.053.493-.363.4-1.38 1.35-1.38 3.293s1.413 3.82 1.61 4.083c.2.263 2.78 4.247 6.737 5.953.943.407 1.68.65 2.253.83.947.3 1.807.257 2.487.157.76-.113 2.347-.96 2.677-1.887.33-.927.33-1.72.23-1.887-.097-.177-.36-.277-.757-.477Z"
        fill="white"
      />{" "}
    </svg>
  );
};
const FloatingWhatsApp = () => {
  const [showLabel, setShowLabel] = useState(false);
  const whatsappNumber = "2348106448731";
  const whatsappMessage =
    "Hello Ademola, I came across your portfolio and I would like to discuss a project with you.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <div className="fixed bottom-24 right-6 z-50">
      {" "}
      {/* Message Label */}{" "}
      {showLabel && (
        <div className="absolute bottom-16 right-0 mb-3 w-64 rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl shadow-black/30">
          {" "}
          <button
            type="button"
            onClick={() => setShowLabel(false)}
            aria-label="Close WhatsApp message"
            className="absolute right-2 top-2 rounded-full p-1 text-slate-500 transition hover:bg-white/5 hover:text-white"
          >
            {" "}
            <X size={16} />{" "}
          </button>{" "}
          <p className="pr-5 text-sm font-semibold text-white">
            {" "}
            Let's talk about your project{" "}
          </p>{" "}
          <p className="mt-1 text-xs leading-5 text-slate-400">
            {" "}
            Have a question or project idea? Chat with me directly on
            WhatsApp.{" "}
          </p>{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-400"
          >
            {" "}
            <WhatsAppIcon size={18} /> Chat on WhatsApp{" "}
          </a>{" "}
        </div>
      )}{" "}
      {/* Floating WhatsApp Button */}{" "}
      <div className="relative">
        {" "}
        {/* Pulse Effect */}{" "}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />{" "}
        <button
          type="button"
          onClick={() => setShowLabel((prev) => !prev)}
          aria-label="Open WhatsApp contact"
          aria-expanded={showLabel}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/20 transition duration-300 hover:scale-110 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {" "}
          <WhatsAppIcon size={29} />{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default FloatingWhatsApp;
