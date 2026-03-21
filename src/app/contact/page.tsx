import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact hvktechinnovations.in for software services and support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 text-white">
        <Image src="/assets/contact-bg.jpg" alt="Workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold">{siteConfig.contact.title}</h1>
          <p className="mt-4 max-w-2xl text-zinc-200">{siteConfig.contact.body}</p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900">{siteConfig.contact.heading}</h2>
          <p className="mt-4 text-zinc-700">{siteConfig.name}</p>
          <p className="mt-1 text-zinc-700">{siteConfig.address}</p>
          <p className="mt-4 text-zinc-700">
            <a href={siteConfig.phoneHref} className="text-[#0a827e] hover:text-[#0ec9c3]">
              {siteConfig.phonePrimary}
            </a>
          </p>
          <p className="mt-1 text-zinc-700">{siteConfig.phoneSecondary}</p>

          <div className="mt-6 border-t border-zinc-200 pt-6">
            <h3 className="text-lg font-semibold text-zinc-900">Hours</h3>
            <p className="mt-2 text-zinc-700">
              {siteConfig.contact.hoursLabel}: {siteConfig.contact.hoursValue}
            </p>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-[#0a827e] hover:text-[#0ec9c3]"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
