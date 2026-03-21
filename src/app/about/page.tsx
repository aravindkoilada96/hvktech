import { AboutCards } from "@/components/AboutCards";
import { siteConfig } from "@/data/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "About hvktechinnovations.in and our software expertise.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#161616] py-18 text-zinc-100">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold">{siteConfig.about.title}</h1>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">{siteConfig.intro.description}</p>
        </div>
      </section>
      <AboutCards />
    </>
  );
}
