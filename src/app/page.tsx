"use client";

import { Button, ContactUsForm, Reveal } from "@/components";
import { FaBox, FaPills, FaToolbox } from "react-icons/fa";
import { ProductsSwiper } from "@/components/Swiper";
import { INFORMATION } from "@/data";
import Image from "next/image";

const SERVICES = [
  { icon: FaPills, title: "Pharmaceutical Products", description: "A wide range of prescription and over-the-counter medications, ensuring compliance with health regulations and standards." },
  { icon: FaBox, title: "Dietary Supplements", description: "High-quality vitamins, minerals, and herbal supplements designed to support overall health and wellness." },
  { icon: FaToolbox, title: "Electronic Products", description: "Advanced electronic devices and accessories that combine innovation and quality for personal and professional needs." },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[80rem]">
      <section className="relative mx-4 mt-4 overflow-hidden rounded-[2rem] shadow-panel sm:mx-6 lg:mx-8">
        <div className="relative min-h-[36rem] bg-cover bg-center" style={{ backgroundImage: 'url("/landing.jpg")' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/75 to-brand-900/20" />
          <div className="circuit-field pointer-events-none absolute inset-0 text-white/10" />
          <div className="relative flex min-h-[36rem] items-center px-7 py-14 sm:px-12 lg:px-20">
            <Reveal className="max-w-3xl text-white">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold-400" />
                <span className="eyebrow text-gold-300">Since 2022 · Cambodia</span>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
                Better products.<br />
                <span className="text-gold-300">Better everyday living.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                PE-SUPPLY Co.,LTD connects healthcare professionals, fitness enthusiasts, and technology users with reliable products and thoughtful service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button goto="/contact" className="rounded-full px-7 py-3">Get Started</Button>
                <Button goto="/about" className="rounded-full bg-white/10 px-7 py-3 text-white shadow-none backdrop-blur-md hover:bg-white hover:text-brand-900">Discover PE-SUPPLY</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="my-8 flex flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Reveal className="section-shell grid gap-8 p-7 md:grid-cols-[1.1fr_.9fr] md:p-10">
          <div>
            <p className="eyebrow text-brand-500">Who we are</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">A growing Cambodian distributor built around trust.</h2>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <p className="leading-7 text-ink/65">Our primary customers include healthcare professionals, fitness enthusiasts, and tech users. They seek reliable health solutions and the latest technology to enhance their lives.</p>
            <Button goto="/about" className="w-fit rounded-full px-6">Learn more</Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div><p className="eyebrow text-brand-500">Our catalog</p><h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Products we provide</h2></div>
            <p className="max-w-md text-sm leading-6 text-ink/55">Explore our product selection across healthcare, wellness, and electronics.</p>
          </div>
          <div className="rounded-[1.5rem] border border-sand-200 bg-white/70 p-4 shadow-card sm:p-6"><ProductsSwiper /></div>
        </Reveal>

        <section>
          <div className="mb-6"><p className="eyebrow text-brand-500">What we offer</p><h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Our services</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 100} className="group/item rounded-2xl border border-sand-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-panel">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover/item:bg-brand-500 group-hover/item:text-white"><service.icon size={24} /></div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6"><p className="eyebrow text-brand-500">Who we work with</p><h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Our partners</h2><p className="mt-2 max-w-2xl text-ink/60">We collaborate with trusted brands and suppliers to bring quality products to Cambodia.</p></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {INFORMATION.partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 50} className="flex min-h-36 items-center justify-center rounded-2xl border border-sand-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-panel">
                <Image src={partner.image.src} alt={partner.image.alt} width={180} height={180} className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal><ContactUsForm /></Reveal>
      </div>
    </main>
  );
}
