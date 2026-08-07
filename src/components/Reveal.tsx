"use client";

import React from "react";
import { cn } from "@/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Delay in ms before the reveal animation starts, once in view. */
  delay?: number;
}

/**
 * Fades + slides its children into place the first time they scroll into
 * view, using IntersectionObserver. Falls back to fully visible content if
 * JS hasn't run yet (no layout shift, nothing hidden from crawlers).
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      {...props}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-smooth",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};
