// src/components/DawnOverlay.tsx
'use client';

import { motion } from 'framer-motion';

export default function DawnOverlay() {
  return (
    <motion.div
      className="dawn-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 6, ease: "easeOut" }}
    />
  );
}