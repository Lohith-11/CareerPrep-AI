import { cn } from "@/lib/utils";
import React from "react";

export function AnimatedGradientText({ children, className = "", ...props }) {
  return (
    <span
      className={cn(
        "animate-gradient bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
