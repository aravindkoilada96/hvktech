import { ServicesGrid } from "@/components/ServicesGrid";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Explore software services offered by hvktechinnovations.in.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#161616] py-18 text-zinc-100">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Discover our specialized software services and delivery-focused technology solutions.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </>
  );
}
