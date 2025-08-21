"use client";

import React, { useCallback, useRef } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex size-full cursor-pointer flex-col items-start justify-start overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50 p-6 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700",
        className
      )}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--gradient-size": `${gradientSize}px`,
          "--gradient-color": gradientColor,
          "--gradient-opacity": gradientOpacity,
        } as React.CSSProperties
      }
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(var(--gradient-size) circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 60%)`,
          }}
        />
      </div>
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};
