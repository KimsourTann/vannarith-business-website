"use client";

import { Button, ContactUsForm, Reveal } from "@/components";
import { FaBox, FaPills, FaToolbox } from "react-icons/fa";
import { ProductsSwiper } from "@/components/Swiper";
import { INFORMATION } from "@/data";
import Image from "next/image";

const SERVICES = [
  {
    icon: FaPills,
    title: "Pharmaceutical Products",
    description:
      "A wide range of prescription and over-the-counter medications, ensuring compliance with health regulations and standards.",
  },
  {
    icon: FaBox,
    title: "Dietary Supplements",
    description:
      "High-quality vitamins, minerals, and herbal supplements designed to support overall health and wellness.",
  },
  {
    icon: FaToolbox,
    title: "Electronic Products",
    description:
      "Advanced electronic devices and accessories that combine innovation and quality catering to both personal and professional needs.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[72rem]">
      <div
        className="relative mx-auto my-3 grid h-[34rem] w-[96%] place-items-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat px-2 shadow-panel"
        style={{ backgroundImage: 'url("/landing.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/50 to-brand-900/20" />
        <div className="circuit-field pointer-events-none absolute inset-0 text-white/10" />
        <Reveal className="relative max-w-2xl rounded-2xl p-10 text-center text-white">
          <p className="eyebrow mb-3 text-gold-400">Since 2022 · Cambodia</p>
          <h1 className="font-display text-3xl font-semibold leading-tight md:text-6xl">
            WELCOME to PE-SUPPLY Co.,LTD
          </h1>
          <p className="mt-3 font-display text-base italic text-sand-100/90 md:text-xl">
            &quot;Your Health, Our Priority.&quot;
          </p>

          <Button goto="/contact" className="mt-7 rounded-full text-sm md:text-base">
            Get Started
          </Button>
        </Reveal>
      </div>

      <div className="my-8 flex flex-col gap-16 px-5">
        <Reveal className="mx-auto grid w-full grid-rows-[auto,1fr,auto] rounded-2xl card-surface p-6 shadow-card md:p-8">
          <p className="eyebrow text-brand-500">Who we are</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
            Who are we?
          </h2>
          <p className="mt-3 text-ink/70">
            Our primary customers include healthcare professionals, fitness
            enthusiasts, and tech-They seek reliable health solutions and the
            latest technology to enhance their lives.
          </p>

          <Button goto="/about" className="ml-auto mt-6 max-w-[16rem] rounded-full">
            See more
          </Button>
        </Reveal>

        {/* products  */}
        <Reveal>
          <p className="eyebrow text-center text-brand-500">Our catalog</p>
          <h2 className="text-center font-display text-3xl font-semibold text-ink">
            Our products
          </h2>
          <div className="mt-6">
            <ProductsSwiper />
          </div>
        </Reveal>

        {/* services  */}
        <div>
          <p className="eyebrow text-brand-500">What we offer</p>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Our services
          </h2>
          <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {SERVICES.map((service, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                className="group/item flex flex-col gap-3 rounded-2xl card-surface p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-panel"
              >
                <div className="inline-flex w-fit rounded-xl bg-brand-50 p-3 text-brand-500 transition-all duration-300 ease-smooth group-hover/item:bg-brand-500 group-hover/item:text-white">
                  <service.icon size={40} />
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-sm text-ink/70">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* partners */}
        <div>
          <p className="eyebrow text-brand-500">Who we work with</p>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Our partners
          </h2>
          <p className="mt-1 text-ink/60">
            Below are the partners that we corporated with
          </p>
          <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] place-items-center gap-5 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {INFORMATION.partners.map((partner, index) => (
              <Reveal
                key={index}
                delay={index * 60}
                className="flex h-full w-full items-center justify-center rounded-xl card-surface p-4 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1.5"
              >
                <Image
                  className="h-[80px] w-[80px] object-contain md:h-[140px] md:w-[140px]"
                  src={partner.image.src}
                  alt={partner.image.alt}
                  width={200}
                  height={200}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Reveal>
        <ContactUsForm />
      </Reveal>
    </main>
  );
}
