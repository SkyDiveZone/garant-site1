"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-600/40",
  secondary:
    "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  outline:
    "border-2 border-brand-600 text-brand-600 bg-transparent hover:bg-brand-50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base font-semibold",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  target,
  rel,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
