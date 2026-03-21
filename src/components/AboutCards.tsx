import Image from "next/image";
import { siteConfig } from "@/data/site-content";

export function AboutCards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold text-zinc-900">{siteConfig.about.title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {siteConfig.about.cards.map((card) => (
          <article
            key={card.title}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-52">
              <Image src={card.image} alt={card.alt} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
