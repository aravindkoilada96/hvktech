import Link from "next/link";
import { siteConfig } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 py-8 text-zinc-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">{siteConfig.footer.copyright}</p>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/about" className="transition hover:text-[#0ec9c3]">
            About
          </Link>
          <Link href="/services" className="transition hover:text-[#0ec9c3]">
            Services
          </Link>
          <Link href="/contact" className="transition hover:text-[#0ec9c3]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
