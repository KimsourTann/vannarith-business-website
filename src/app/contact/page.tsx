"use client";

import React from "react";
import Image from "next/image";
import { CiPhone, CiMail } from "react-icons/ci";
import { BsCopy } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { StaticMap } from "@/components/StaticMap";
import { INFORMATION } from "@/data";

const contacts = {
  phone: INFORMATION.phone,
  email: INFORMATION.email,
  telegram: "@Username",
  location: INFORMATION.address.text,
};

export default function Contact() {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert copied
      })
      .catch((err) => {
        // error alert
      });
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="hidden w-1/2 md:hidden lg:hidden xl:block">
        <Image
          src="/contact-bg-img.jpg"
          alt="contact us image"
          width={500}
          height={500}
          className="mx-auto w-1/2 rounded-2xl shadow-panel"
        />
      </div>
      <div className="flex h-full w-full flex-col gap-4 p-8 lg:w-1/2">
        <div className="px-8">
          <p className="eyebrow text-brand-500">Reach out</p>
          <h1 className="font-display text-xl font-semibold text-ink lg:text-3xl">
            Contact Us
          </h1>
        </div>
        <div className="grid h-2/3 w-full grid-rows-4 place-content-center place-items-center gap-4 xl:grid-cols-2 xl:grid-rows-2">
          <a
            className="flex h-20 w-full items-center gap-2 rounded-xl card-surface px-4 shadow-card transition-all duration-200 hover:-translate-y-1 xl:w-2/3"
            href={`tel:${contacts.phone}`}
          >
            <CiPhone className="text-3xl text-brand-500" />
            <span className="text-md text-ink/80">{contacts.phone}</span>
          </a>
          <div className="flex h-20 w-full items-center justify-around gap-2 rounded-xl card-surface px-4 shadow-card transition-all duration-200 hover:-translate-y-1 xl:w-2/3">
            <CiMail className="text-3xl text-gold-500" />
            <span className="text-md text-ink/80">{contacts.email}</span>
            <BsCopy
              className="cursor-pointer text-xl text-gold-500 active:scale-110"
              onClick={() => {
                handleCopy(`${contacts.email}`);
              }}
            />
          </div>
          <div className="flex h-20 w-full items-center justify-around gap-2 rounded-xl card-surface px-4 shadow-card transition-all duration-200 hover:-translate-y-1 xl:w-2/3">
            <HiOutlineLocationMarker className="text-3xl text-gold-500" />
            <span className="text-sm text-ink/80">{contacts.location}</span>
          </div>
          <div className="flex h-20 w-full items-center justify-between gap-2 rounded-xl card-surface px-4 shadow-card transition-all duration-200 hover:-translate-y-1 xl:w-2/3">
            <div className="flex gap-2">
              <LiaTelegramPlane className="text-3xl text-brand-500" />
              <span className="text-md text-ink/80">{contacts.telegram}</span>
            </div>
            <FiExternalLink
              className="cursor-pointer text-xl text-brand-500 active:scale-110"
              onClick={() => {
                window.open(`https://t.me/${contacts.telegram}`);
              }}
            />
          </div>
        </div>
        <div className="hidden lg:flex xl:flex">
          <StaticMap
            latitude={INFORMATION.address.lat}
            longitude={INFORMATION.address.long}
            width={1000}
            height={300}
            location={contacts.location}
          />
        </div>
        <div className="mx-auto lg:hidden">
          <StaticMap
            latitude={INFORMATION.address.lat}
            longitude={INFORMATION.address.long}
            width={300}
            height={200}
            location={contacts.location}
          />
        </div>
      </div>
    </div>
  );
}
