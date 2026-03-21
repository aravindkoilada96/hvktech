import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services, siteConfig } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: "Service",
      description: "Service details",
      path: "/services",
    });
  }

  return createPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-900 py-20 text-white">
        <Image
          src="/assets/contact-bg.jpg"
          alt="Abstract technology workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="inline-flex rounded-full bg-[#eee8aa] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-zinc-900 uppercase">
            Service
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-zinc-200">{service.shortDescription}</p>
          <a
            href={siteConfig.phoneHref}
            className="mt-8 inline-flex rounded-md bg-[#0ec9c3] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#1ce5df]"
          >
            Contact us
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900">How we deliver</h2>
          <p className="mt-3 leading-7 text-zinc-700">
            We tailor each engagement based on your requirements, timelines, and business priorities. Our process focuses on clear planning, iterative execution, quality delivery, and measurable outcomes.
          </p>
          <div className="mt-6">
            <Link href="/services" className="text-sm font-semibold text-[#0a827e] hover:text-[#0ec9c3]">
              Back to all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
