"use client";

import { cn, handleNavigation } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LuX } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isHome = !["/events", "/about", "/contact"].some((path) => pathname.startsWith(path));
  const links = [
    ["Home", "/", isHome],
    ["Events", "/events", pathname.startsWith("/events")],
    ["About", "/about", pathname.startsWith("/about")],
    ["Contact", "/contact", pathname.startsWith("/contact")],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-[92%] max-w-[80rem] items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shadow-card md:h-12 md:w-12">
            <Image src="/logo.png" alt="PE-SUPPLY logo" width={64} height={64} quality={100} />
          </div>
          <div>
            <h1 className="font-display text-base font-semibold leading-none text-ink sm:text-xl">PE-SUPPLY <span className="text-brand-500">Co.,LTD</span></h1>
            <p className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.2em] text-ink/45 sm:block">Health · Wellness · Technology</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-sand-200 bg-sand-50/80 p-1 md:flex">
          {links.map(([label, href, active]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-medium text-ink/65 transition-colors hover:bg-white hover:text-ink" data-active={active}>
              <span className="relative">{label}<span className={cn("absolute -bottom-1 left-1/2 h-0.5 w-1 rounded-full bg-gold-400 transition-all", active ? "w-5 -translate-x-1/2" : "-translate-x-1/2 opacity-0")} /></span>
            </Link>
          ))}
        </nav>

        <div className="relative block h-10 w-10 md:hidden">
          <button aria-label="Open menu" className={cn("absolute inset-0 flex items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all", isMenuOpen ? "scale-0 rotate-90" : "scale-100")} onClick={() => setIsMenuOpen(true)}><RxHamburgerMenu size={22} /></button>
          <button aria-label="Close menu" className={cn("absolute inset-0 flex items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all", isMenuOpen ? "scale-100" : "scale-0 -rotate-90")} onClick={() => setIsMenuOpen(false)}><LuX size={22} /></button>
        </div>

        <nav className={cn("absolute left-0 right-0 top-full border-b border-sand-200 bg-white px-4 shadow-panel transition-all md:hidden", isMenuOpen ? "max-h-96 py-3 opacity-100" : "pointer-events-none max-h-0 overflow-hidden py-0 opacity-0")}>
          <ul className="mx-auto flex max-w-[80rem] flex-col gap-1">
            {links.map(([label, href, active]) => (
              <li key={href}>
                <button className={cn("w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors", active ? "bg-brand-50 text-brand-600" : "text-ink/70 hover:bg-sand-50")} onClick={() => { handleNavigation(router, href); setIsMenuOpen(false); }}>{label}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
