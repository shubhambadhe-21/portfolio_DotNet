"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
        >
          <div className="font-mono text-signal-cyan text-sm mb-4 tracking-wider">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              GET /profile HTTP/1.1
            </motion.span>
          </div>
          <div className="relative h-14 w-14">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/10"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-t-amber border-r-amber border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 font-mono text-xs text-ink-400"
          >
            200 OK — building interface…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
