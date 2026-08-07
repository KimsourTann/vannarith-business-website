import React from "react";
import { LuMail, LuMap, LuPhone } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { INFORMATION } from "@/data";

export const Footer = () => {
  return (
    <div className="relative mt-auto overflow-hidden bg-brand-800 text-sand-100">
      <div className="circuit-field pointer-events-none absolute inset-0 text-brand-700/40" />
      <div className="relative mx-auto flex w-[90%] max-w-[92rem] flex-col justify-around gap-8 py-12 md:flex-row lg:gap-10">
        <div className="flex-1 px-2 md:px-10">
          <h1 className="font-display text-xl font-semibold text-white">
            PE-SUPPLY Co.,LTD
          </h1>
          <p className="pt-4 text-sm text-sand-100/80 2xl:text-[16px]">
            Our primary customers include healthcare professionals, fitness
            enthusiasts, and tech-They seek reliable health solutions and the
            latest technology to enhance their lives.
          </p>
        </div>
        <div className="px-2 md:px-10">
          <h1 className="eyebrow text-gold-400">Quick Links</h1>
          <ul className="flex flex-col gap-2 pt-4 text-sm text-sand-100/80 2xl:text-[16px]">
            <Link href="/">
              <li className="cursor-pointer transition-colors duration-300 ease-smooth hover:text-gold-300">
                Home
              </li>
            </Link>
            <Link href="/events">
              <li className="cursor-pointer transition-colors duration-300 ease-smooth hover:text-gold-300">
                Events
              </li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer transition-colors duration-300 ease-smooth hover:text-gold-300">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer transition-colors duration-300 ease-smooth hover:text-gold-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex-1 px-2 md:px-10">
          <h1 className="eyebrow text-gold-400">Contact Us</h1>
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href={INFORMATION.address.url}
              className="flex items-center gap-2 transition-colors duration-300 ease-smooth hover:text-gold-300"
            >
              <LuMap />{" "}
              <p className="text-sm text-sand-100/80 2xl:text-[16px]">
                {INFORMATION.address.text}
              </p>
            </Link>
            <div className="flex items-center gap-2">
              <LuPhone />{" "}
              <p className="text-sm text-sand-100/80 2xl:text-[16px]">
                {INFORMATION.phone + " / " + INFORMATION.secondPhone}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <LuMail />
              <p className="text-sm text-sand-100/80 2xl:text-[16px]">
                {INFORMATION.email}
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-10">
          <h1 className="eyebrow text-gold-400">Our Social Media</h1>
          <ul className="flex gap-3 pt-4">
            <li className="cursor-pointer rounded-full bg-brand-700 p-2 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:bg-gold-400 hover:text-brand-900">
              <FaFacebook size={20} />
            </li>
            <li className="cursor-pointer rounded-full bg-brand-700 p-2 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:bg-gold-400 hover:text-brand-900">
              <FaInstagram size={20} />
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-brand-700/60 px-10 py-3">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-center text-sm text-sand-100/70 md:text-start">
            Copyright © PE-SUPPLY Co.,LTD
          </p>
        </div>
      </div>
    </div>
  );
};
