import Link from "next/link";
import { services } from "@/data/site-content";

export function ServicesGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#0a827e] uppercase">Services</p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900">What We Offer</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-[#0ec9c3] hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-zinc-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{service.shortDescription}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-[#0a827e] transition hover:text-[#0ec9c3]"
            >
              View Service
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
