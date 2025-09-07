import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "../components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export function AnimatedGradientTextDemo() {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#dbeafe1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#dbeafe3f] ">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-blue-600/50 via-emerald-500/50 to-blue-600/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      ✨<hr className="mx-2 h-4 w-px shrink-0 bg-slate-500" />
      <AnimatedGradientText className="text-sm font-medium">
        AI Powered
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-slate-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>
  );
}
export default AnimatedGradientTextDemo;
