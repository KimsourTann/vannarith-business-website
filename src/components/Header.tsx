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

  let isDefaultActive = true;
  ["/events", "/about", "/contact"].forEach((v) => {
    if (pathname.startsWith(v)) {
      isDefaultActive = false;
    }
  });

  return (
    <div className="sticky top-0 z-50 w-full border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex w-[90%] max-w-[72rem] items-center justify-between px-2 py-3 sm:px-10">
        <Link href="/" className="relative flex items-center gap-3 md:gap-4">
          <div className="relative aspect-square h-9 md:h-12">
            <Image
              src="/logo.png"
              alt="logo"
              width={64}
              height={64}
              className="absolute inset-0"
              quality={100}
            />
          </div>
          <h1 className="font-display text-lg font-semibold text-ink md:text-2xl">
            PE-SUPPLY <span className="text-brand-500">Co.,LTD</span>
          </h1>
        </Link>
        {/* Big screen naivgation */}
        <nav className="hidden md:block">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="underline-animation eyebrow cursor-pointer text-ink/80 hover:text-ink"
              data-active={isDefaultActive}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="underline-animation eyebrow cursor-pointer text-ink/80 hover:text-ink"
              data-active={pathname.startsWith("/events")}
            >
              Events
            </Link>
            <Link
              href="/about"
              className="underline-animation eyebrow cursor-pointer text-ink/80 hover:text-ink"
              data-active={pathname.startsWith("/about")}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="underline-animation eyebrow cursor-pointer text-ink/80 hover:text-ink"
              data-active={pathname.startsWith("/contact")}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div className="relative block h-7 w-7 md:hidden">
          <RxHamburgerMenu
            size={28}
            className={cn(
              "absolute inset-0 text-brand-700 transition-all duration-300 ease-smooth",
              isMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
            )}
            onClick={() => setIsMenuOpen(true)}
          />
          <LuX
            size={28}
            className={cn(
              "absolute inset-0 text-brand-700 transition-all duration-300 ease-smooth",
              isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
            )}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full overflow-hidden border-t border-sand-200 bg-sand-50 shadow-panel transition-all duration-300 ease-smooth md:hidden",
            isMenuOpen
              ? "max-h-96 border-t-[1px] opacity-100"
              : "pointer-events-none max-h-0 border-t-0 opacity-0",
          )}
        >
          <ul className="flex flex-col p-2">
            <li
              className="eyebrow cursor-pointer rounded-md p-3 text-ink/80 transition-colors duration-200 ease-smooth data-[active=true]:bg-brand-50 data-[active=true]:text-brand-600"
              data-active={isDefaultActive}
              onClick={() => {
                handleNavigation(router, "/");
                if (!isDefaultActive) {
                  setIsMenuOpen(false);
                }
              }}
            >
              Home
            </li>
            <li
              className="eyebrow cursor-pointer rounded-md p-3 text-ink/80 transition-colors duration-200 ease-smooth data-[active=true]:bg-brand-50 data-[active=true]:text-brand-600"
              data-active={pathname.startsWith("/events")}
              onClick={() => {
                handleNavigation(router, "/events");
                if (!pathname.startsWith("/events")) {
                  setIsMenuOpen(false);
                }
              }}
            >
              Events
            </li>
            <li
              className="eyebrow cursor-pointer rounded-md p-3 text-ink/80 transition-colors duration-200 ease-smooth data-[active=true]:bg-brand-50 data-[active=true]:text-brand-600"
              data-active={pathname.startsWith("/about")}
              onClick={() => {
                handleNavigation(router, "/about");
                if (!pathname.startsWith("/about")) {
                  setIsMenuOpen(false);
                }
              }}
            >
              About
            </li>
            <li
              className="eyebrow cursor-pointer rounded-md p-3 text-ink/80 transition-colors duration-200 ease-smooth data-[active=true]:bg-brand-50 data-[active=true]:text-brand-600"
              data-active={pathname.startsWith("/contact")}
              onClick={() => {
                handleNavigation(router, "/contact");
                if (!pathname.startsWith("/contact")) {
                  setIsMenuOpen(false);
                }
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
