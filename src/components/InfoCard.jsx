import { motion } from "framer-motion";

export default function InfoCard({ title, content, visible, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 10 }
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`absolute bg-surface/95 backdrop-blur-md p-4 rounded-xl shadow-[0_0_20px_rgba(209,0,0,0.15)] border border-border-subtle max-w-[200px] z-50 ${className}`}
    >
      <div className="flex flex-col gap-1">
        <h4 className="text-[12px] font-black text-white uppercase tracking-wider">
          {title}
        </h4>
        <div className="w-4 h-[1px] bg-primary mb-1"></div>
        <p className="text-[10px] text-text-secondary leading-relaxed">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
