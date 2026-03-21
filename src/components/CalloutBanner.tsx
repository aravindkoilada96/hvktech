import { siteConfig } from "@/data/site-content";

export function CalloutBanner() {
  return (
    <section className="bg-[#161616] py-14 text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold">{siteConfig.featured.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">{siteConfig.featured.description}</p>
        </div>
        <a
          href={siteConfig.phoneHref}
          className="shrink-0 rounded-md bg-[#0ec9c3] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#1ce5df]"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
