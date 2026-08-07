"use client";

import { Download, Share2, Check } from "lucide-react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import GlowButton from "@/components/ui/GlowButton";

export default function TopRightActions() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="reference-top-actions fixed top-16 right-10 flex items-center gap-4 z-40"
    >
      <GlassButton size="md" className="w-10 h-10">
        <Download size={18} />
      </GlassButton>
      <GlassButton size="md" className="w-10 h-10">
        <Share2 size={18} />
      </GlassButton>
      <GlowButton className="w-12 h-12">
        <Check size={20} />
      </GlowButton>
    </motion.div>
  );
}
