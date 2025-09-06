
import { cn } from "@/lib/utils";
import React from "react";

export function AnimatedGradientText({ 
  children, 
  className = "",
  ...props 
}) {
  return (
    <span
      className={cn(
        "animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
