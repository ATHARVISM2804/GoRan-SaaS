import React, { ReactNode } from "react";

interface GlareHoverProps {
  children: ReactNode;
}

const GlareHover = ({ children }: GlareHoverProps) => {
  return (
    <div className="relative group overflow-hidden">
      {/* Glare effect */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-white/10 via-white/0 to-white/5 rotate-12 blur-2xl animate-glare" />
      </div>
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default GlareHover;
