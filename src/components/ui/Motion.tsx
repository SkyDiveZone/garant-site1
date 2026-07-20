"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function MotionSection({ children, className, id }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div id={id} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface MotionItemProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function MotionItem({ children, className, id }: MotionItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div id={id} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div id={id} variants={fadeInUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
