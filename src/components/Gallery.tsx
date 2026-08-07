import { Event } from "@/data";
import { cn } from "@/utils";
import React from "react";
import { GalleryItem } from "./GalleryItem";
import { Reveal } from "./Reveal";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Event[];
}

export const Gallery = ({ items, ...props }: GalleryProps) => {
  return (
    <div
      {...props}
      className={cn(
        "relative mx-auto grid w-[90%] max-w-[62rem] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3",
        props.className,
      )}
    >
      {items.map((item, index) => (
        <Reveal key={index} delay={(index % 6) * 80}>
          <GalleryItem {...item} />
        </Reveal>
      ))}
    </div>
  );
};

