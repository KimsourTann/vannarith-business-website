import React from "react";
import { LuMail, LuMap, LuPhone } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { INFORMATION } from "@/data";

export const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden bg-brand-900 text-sand-100">
      <div className="circuit-field pointer-events-none absolute inset-0 text-brand-700/30" />
      <div className="relative mx-auto grid w-[92%] max-w-[80rem] gap-10 py-14 md:grid-cols-[1.4fr_.7fr_1.2fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-2"><img src="/logo.png" alt="PE-SUPPLY logo" className="h-10 w-10" /></div>
            <div><h2 className="font-display text-xl font-semibold text-white">PE-SUPPLY <span className="text-gold-300">Co.,LTD</span></h2><p className="eyebrow mt-1 text-white/45">Health · Wellness · Technology</p></div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-sand-100/65">Our primary customers include healthcare professionals, fitness enthusiasts, and tech users seeking reliable health solutions and the latest technology.</p>
        </div>

        <div>
          <h3 className="eyebrow text-gold-400">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-sand-100/70">
            {[['Home','/'],['Events','/events'],['About','/about'],['Contact','/contact']].map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-400">Contact us</h3>
          <div className="mt-5 space-y-4 text-sm text-sand-100/70">
            <div className="flex gap-3"><LuMap className="mt-1 shrink-0 text-gold-300" /><p>{INFORMATION.address.text}</p></div>
            <div className="flex gap-3"><LuPhone className="mt-1 shrink-0 text-gold-300" /><p>{INFORMATION.phone} / {INFORMATION.secondPhone}</p></div>
            <div className="flex gap-3"><LuMail className="mt-1 shrink-0 text-gold-300" /><p>{INFORMATION.email}</p></div>
          </div>
          <div className="mt-6 flex gap-2">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-gold-400 hover:text-brand-900"><FaFacebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-gold-400 hover:text-brand-900"><FaInstagram size={18} /></a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto w-[92%] max-w-[80rem] py-4"><p className="text-center text-xs text-sand-100/45 sm:text-left">Copyright © PE-SUPPLY Co.,LTD</p></div>
      </div>
    </footer>
  );
};
