"use client";

import React from "react";
import { LuMail } from "react-icons/lu";
import { Button } from "./Button";
import { INFORMATION } from "@/data";
import { ContactTemplate } from "./mail";
import { render } from "@react-email/components";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

async function onSend(data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}) {
  return await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify({
      from: `${INFORMATION.name} <${INFORMATION.email}>`,
      to: (INFORMATION.email || "").split(","),
      subject: "New email from " + data.name,
      html: await render(ContactTemplate(data)),
    }),
  });
}

const mailSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(9, { message: "Invalid phone number" }),
  address: z.string().min(1, { message: "Address is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const ContactUsForm = () => {
  const [buttonDisable, setButtonDisable] = React.useState(false);

  const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  return (
    <div className="relative flex w-full flex-col gap-5 overflow-hidden rounded-2xl bg-brand-800 p-10 text-white shadow-panel md:my-10 md:flex-row">
      <div className="circuit-field pointer-events-none absolute inset-0 text-brand-700/40" />
      <div className="relative flex flex-1 flex-col items-center">
        <LuMail size={112} className="mb-5 hidden text-gold-400 md:block" />
        <div className="flex flex-1 flex-col items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
            quality={100}
            className="h-16 w-16 rounded-full bg-white p-2"
          />
          <h1 className="mt-4 font-display text-xl font-semibold md:text-2xl">
            PE-SUPPLY Co.,LTD
          </h1>
          <p className="w-3/4 text-center text-sm text-sand-100/80 md:text-base">
            Our primary customers include healthcare professionals, fitness
            enthusiasts, and tech-They seek reliable health solutions and the
            latest technology to enhance their lives.
          </p>
        </div>
      </div>
      <div className="relative flex-1">
        <h1 className="hidden font-display text-2xl font-semibold md:block">
          PE-SUPPLY Co.,LTD
        </h1>
        <form
          className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2"
          onSubmit={form.handleSubmit((d) => {
            toast
              .promise(onSend(d), {
                pending: "Sending...",
                success: "Email sent successfully! We'll get back to you soon.",
                error:
                  "Failed to send email! Please contact us using other method.",
              })
              .then(() => {
                form.reset();
              })
              .finally(() => {
                setButtonDisable(false);
              });
          }, console.error)}
        >
          <div>
            <input
              placeholder="Name"
              className="w-full rounded-lg border border-transparent bg-white/95 p-2.5 text-ink transition-colors duration-200 ease-smooth placeholder:text-ink/40 focus:border-gold-400 focus:outline-none"
              {...form.register("name")}
            />
            <p className="text-sm text-gold-300">
              {form.formState.errors.name?.message}
            </p>
          </div>
          <div>
            <input
              placeholder="Email"
              className="w-full rounded-lg border border-transparent bg-white/95 p-2.5 text-ink transition-colors duration-200 ease-smooth placeholder:text-ink/40 focus:border-gold-400 focus:outline-none"
              {...form.register("email")}
            />
            <p className="text-sm text-gold-300">
              {form.formState.errors.email?.message}
            </p>
          </div>
          <div>
            <input
              placeholder="Phone"
              className="w-full rounded-lg border border-transparent bg-white/95 p-2.5 text-ink transition-colors duration-200 ease-smooth placeholder:text-ink/40 focus:border-gold-400 focus:outline-none"
              {...form.register("phone")}
            />
            <p className="text-sm text-gold-300">
              {form.formState.errors.phone?.message}
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-lg border border-transparent bg-white/95 p-2.5 text-ink transition-colors duration-200 ease-smooth placeholder:text-ink/40 focus:border-gold-400 focus:outline-none"
              {...form.register("address")}
            />
            <p className="text-sm text-gold-300">
              {form.formState.errors.address?.message}
            </p>
          </div>
          <div className="md:col-span-2">
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full resize-none rounded-lg border border-transparent bg-white/95 p-2.5 text-ink transition-colors duration-200 ease-smooth placeholder:text-ink/40 focus:border-gold-400 focus:outline-none"
              {...form.register("message")}
            ></textarea>
            <p className="text-sm text-gold-300">
              {form.formState.errors.message?.message}
            </p>
          </div>
          <button
            className="button-gold rounded-lg px-4 py-2 disabled:opacity-50 disabled:transition-none md:col-span-2"
            disabled={buttonDisable}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
