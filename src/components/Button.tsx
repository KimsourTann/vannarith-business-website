"use client";

import { NavigationPath, cn, handleNavigation } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  defaultButtonStyle?: boolean;
  goto: NavigationPath;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ goto, defaultButtonStyle, onClick, ...props }, ref) => {
    const router = useRouter();

    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "rounded-lg px-4 py-2",
          defaultButtonStyle || defaultButtonStyle == undefined ? "button" : "",
          "disabled:opacity-50 disabled:transition-none",
          props.className,
        )}
        onClick={
          onClick == undefined ? () => handleNavigation(router, goto) : onClick
        }
      >
        {props.children}
      </button>
    );
  },
);

Button.displayName = "Button";
