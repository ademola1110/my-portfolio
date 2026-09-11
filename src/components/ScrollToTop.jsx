import { ArrowUp } from "lucide-react";
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {" "}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-lg shadow-black/30 transition duration-300 hover:scale-110 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        {" "}
        <ArrowUp size={24} strokeWidth={2.5} />{" "}
      </button>{" "}
    </div>
  );
};
export default ScrollToTop;
