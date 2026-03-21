import { AboutCards } from "@/components/AboutCards";
import { CalloutBanner } from "@/components/CalloutBanner";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { siteConfig } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description: "Innovative Software Solutions for Businesses",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#0a827e] uppercase">{siteConfig.intro.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-zinc-900 sm:text-4xl">{siteConfig.intro.title}</h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-zinc-700">{siteConfig.intro.description}</p>
      </section>

      <AboutCards />
      <ServicesGrid />
      <CalloutBanner />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900">{siteConfig.contact.heading}</h2>
          <p className="mt-3 text-base leading-7 text-zinc-700">{siteConfig.contact.body}</p>
          <div className="mt-6 space-y-2 text-sm text-zinc-700">
            <p>{siteConfig.name}</p>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phonePrimary}</p>
            <p>{siteConfig.phoneSecondary}</p>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="bg-[#161616] py-14 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">{siteConfig.newsletter.title}</h2>
          <p className="mt-3 text-zinc-300">{siteConfig.newsletter.body}</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              aria-label="Email"
              placeholder="Email"
              className="w-full rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm outline-none transition focus:border-[#0ec9c3]"
            />
            <button
              type="button"
              className="rounded-md bg-[#0ec9c3] px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-[#1ce5df]"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
