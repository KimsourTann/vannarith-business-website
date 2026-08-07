import Image from "next/image";
import React from "react";
import { Reveal } from "@/components";

const VISIONS = [
  {
    title: "Quality Assurance",
    description:
      "We prioritize the highest standards of quality in our products, ensuring safety and efficacy.",
  },
  {
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We continuously listen to and respond to their needs.",
  },
  {
    title: "Integrity",
    description:
      "We operate transparently and ethically in all our business dealings in Cambodia.",
  },
];

const ABOUT_CONTEXT =
  "Established in 2022, PE-SUPPLY is Cambodia’s fastest-growing and good distributor. The company distributes as pharmaceutical, Supplements and Electronics products to pharmacies, hospitals, retail outlets, and wholesalers. Its nationwide distribution network with 25 cities operational in Cambodia";

export default function About() {
  return (
    <div className="mx-auto mb-16 w-full max-w-[72rem] gap-4">
      <Reveal className="group relative mt-8 overflow-hidden rounded-2xl shadow-panel">
        <Image
          src="/about-us.jpg"
          alt="about us image"
          width={800}
          height={800}
          quality={100}
          className="mx-auto w-11/12 object-contain transition-transform duration-700 ease-smooth group-hover:scale-[1.02] xl:w-full"
        />
      </Reveal>
      <Reveal className="mt-10 flex flex-col gap-4">
        <p className="mx-auto w-fit rounded-full bg-brand-600 px-6 py-2 text-center font-display text-lg font-semibold text-white shadow-card lg:mx-0 lg:ml-12">
          About Us
        </p>
        <p className="text-md px-8 leading-relaxed text-ink/80 lg:px-12 lg:text-lg xl:px-12">
          {ABOUT_CONTEXT}
        </p>
      </Reveal>

      <div className="mx-auto mt-10 flex w-11/12 flex-col gap-10 rounded-2xl card-surface px-4 py-10 shadow-card xl:mx-0 xl:w-full">
        <div className="flex flex-col gap-4">
          <p className="eyebrow px-2 text-brand-500 xl:px-12">Our vision</p>
          <h1 className="px-2 font-display text-2xl font-semibold text-ink lg:text-3xl xl:px-12">
            Our Vision
          </h1>
          <p className="text-md px-2 leading-relaxed text-ink/80 lg:text-lg xl:px-12">
            To become a trusted leader in the health and electronics distributor
            in Cambodia as known for our integrity, quality, and commitment to
            customer wellness.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-4 px-2 sm:grid-cols-3 xl:px-12">
            {VISIONS.map((vision, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                className="rounded-xl border border-sand-200 bg-sand-50 p-4 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-500 hover:shadow-card"
              >
                <p className="font-display text-lg font-semibold text-brand-600">
                  {vision.title}
                </p>
                <p className="mt-1 text-sm text-ink/70">
                  {vision.description}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="text-md px-2 leading-relaxed text-ink/80 lg:text-lg xl:px-12">
            distinguishes itself in the market by offering a diverse range of
            high-quality pharmaceutical products, dietary supplements, and
            electronic gadgets all rigorously tested for quality and efficacy.
            Our knowledgeable staff provides personalized service to guide
            customers in making informed choices, ensuring they receive products
            tailored to their health and lifestyle needs.
          </p>
        </div>
        <Reveal className="rounded-xl bg-brand-800 px-2 py-8 text-white sm:px-6">
          <p className="eyebrow px-2 text-gold-400 xl:px-8">Our mission</p>
          <h1 className="px-2 font-display text-2xl font-semibold lg:text-3xl xl:px-8">
            Our Mission
          </h1>
          <p className="text-md mt-4 px-2 leading-relaxed text-sand-100/85 lg:text-lg xl:px-8">
            Is to provide high-quality pharmaceutical products, innovative
            supplements, and cutting-edge electronic products that enhance the
            well-being and lifestyle of our customers. We are committed to
            excellence, safety, and customer satisfaction in every aspect of our
            offerings.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
