import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 text-white">
      <Image
        src="/assets/hero.jpg"
        alt="Business team discussing software strategy"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="mb-4 inline-flex w-fit rounded-full bg-[#eee8aa] px-4 py-1 text-xs font-semibold tracking-widest text-zinc-900 uppercase">
          {siteConfig.promoText}
        </p>
        <h1 className="max-w-3xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
          {siteConfig.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-100 sm:text-lg">{siteConfig.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-[#0ec9c3] px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#1ce5df]"
          >
            Get Started Today
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-md border border-zinc-200 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-zinc-900"
          >
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
}
