import React from "react";

const Marquee = ({
  children,
  reverse = false,
  pauseOnHover = false,
  className = "",
  repeat = 4,
  ...props
}) => {
  return (
    <div
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${className}`}
      {...props}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row ${
              reverse ? "animate-marquee-reverse" : "animate-marquee"
            } ${
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;
