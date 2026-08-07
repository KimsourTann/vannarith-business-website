"use client";

import { Event } from "@/data";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";
import { LuArrowRight, LuX } from "react-icons/lu";

const CLOSE_ANIMATION_MS = 250;

export const GalleryItem = (props: Event) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleOpen = () => {
    setIsMounted(true);
    // mount first, then flip the visibility flag on the next frame so the
    // enter transition actually has a starting state to animate from
    requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
  };

  const handleClose = () => {
    setIsVisible(false);
    window.setTimeout(() => setIsMounted(false), CLOSE_ANIMATION_MS);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-2xl card-surface shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-panel sm:w-auto">
        <div className="cursor-pointer" onClick={handleOpen}>
          <Image
            src={props.src}
            alt={props.alt}
            className="aspect-square w-full overflow-hidden object-cover transition-transform duration-500 ease-smooth md:hover:scale-105"
            width={250}
            height={250}
          />
          <LuArrowRight
            size={28}
            className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-brand-600 shadow transition-transform duration-300 ease-smooth sm:hidden"
          />
        </div>
        <div className="w-full p-3 text-center font-display font-semibold text-ink">
          <p className="max-h-[25%] overflow-hidden">
            {props.title.length > 50
              ? props.title.slice(0, 50) + "..."
              : props.title}
          </p>
        </div>
      </div>
      {isMounted ? (
        <>
          <div
            className={cn(
              "fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ease-smooth",
              isVisible ? "opacity-100" : "opacity-0",
            )}
            onClick={handleClose}
          />
          <dialog
            open
            className={cn(
              "fixed inset-0 z-50 flex min-h-[90%] w-11/12 max-w-[52rem] flex-col gap-2 rounded-2xl bg-white p-5 pt-12 shadow-panel transition-all duration-300 ease-smooth md:min-h-96 md:flex-row md:pt-5",
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0",
            )}
          >
            <LuX
              size={28}
              className="absolute right-3 top-3 z-50 cursor-pointer text-ink/60 transition-transform duration-200 ease-smooth hover:scale-110 hover:text-ink"
              onClick={handleClose}
            />
            <div className="relative mx-auto aspect-square max-h-64 flex-1 overflow-hidden rounded-2xl shadow md:h-full md:max-h-full">
              <Image
                src={props.src}
                alt={props.alt}
                className="h-full w-full object-cover"
                width={250}
                height={250}
              />
            </div>
            <div className="flex-1 pl-0 md:pl-8">
              <p className="eyebrow text-brand-500">Event</p>
              <h4 className="mb-2 mt-1 font-display text-3xl font-semibold text-ink">
                {props.title}
              </h4>
              <p className="text-ink/70">{props.description}</p>
            </div>
          </dialog>
        </>
      ) : null}
    </>
  );
};
