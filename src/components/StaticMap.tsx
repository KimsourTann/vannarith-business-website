"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface IMap {
  latitude: string;
  longitude: string;
  width: number;
  height: number;
  location: string;
}

export const StaticMap = ({
  latitude,
  longitude,
  width,
  height,
  location,
}: IMap) => {
  // Uses Google's free "embed" endpoint (no API key / billing required),
  // so the map always loads instead of silently failing like the old
  // Static Maps API call did when NEXT_PUBLIC_GOOGLE_MAP_API_KEY was unset.
  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  const handleRedirectToGoogleMap = () => {
    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="group relative mx-auto overflow-hidden rounded-2xl shadow-card transition-all duration-500 ease-smooth lg:hover:shadow-panel lg:hover:ring-2 lg:hover:ring-brand-500 lg:hover:ring-offset-4"
      style={{ width: "100%", maxWidth: width }}
    >
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{ border: 0, width: "100%", height }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${location}`}
        className="block grayscale-[20%] transition-all duration-500 ease-smooth lg:group-hover:grayscale-0"
      />
      <button
        className="absolute bottom-5 left-8 flex scale-100 items-center justify-center gap-4 rounded-full bg-brand-600 p-2 px-4 text-white shadow-card transition-all duration-300 ease-smooth lg:translate-y-2 lg:scale-0 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100"
        onClick={handleRedirectToGoogleMap}
      >
        <span className="hidden text-sm lg:block">{location}</span>
        <span className="block text-sm lg:hidden">Open in Map</span>
        <FiExternalLink className="text-xl" />
      </button>
    </div>
  );
};
