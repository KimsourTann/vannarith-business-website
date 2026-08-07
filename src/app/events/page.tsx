import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components";
import React from "react";
import events from "@/data/events.json";

export default async function Events() {
  return (
    <main className="mx-auto w-full max-w-[72rem]">
      <Reveal className="mx-auto w-[90%] max-w-96 pt-8 text-center">
        <p className="eyebrow text-brand-500">Life at PE-Supply</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          Events
        </h1>
        <p className="mt-3 text-ink/70">
          Check out our gallery of employee events and activities, reflecting
          the enthusiasm and camaraderie of our team.
        </p>
      </Reveal>
      <Gallery items={events} className="my-8" />
    </main>
  );
}
