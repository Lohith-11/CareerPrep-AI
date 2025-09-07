import React from "react";
import Marquee from "./magicui/marquee";
import { TESTIMONIALS } from "../utils/data";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-row items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold text-sm">
          {testimonial.avatar}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-slate-900">
            {testimonial.name}
          </figcaption>
          <p className="text-xs font-medium text-slate-600">
            {testimonial.role}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-700 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
};

const MarqueeDemo = () => {
  const firstRow = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondRow = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <div
      className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg py-8"
      style={{
        background: "linear-gradient(135deg, #F0F9FF 0%, #DBEAFE 100%)",
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full">
        <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">
          Trusted by Top Professionals
        </h3>

        <Marquee pauseOnHover className="[--duration:5s]">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:5s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      {/* Fade overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/90 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 to-transparent"></div>
    </div>
  );
};

export default MarqueeDemo;
