import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#161616]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="hvktechinnovations.in logo"
            width={44}
            height={44}
            priority
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#eee8aa] sm:text-base">
              {siteConfig.name}
            </p>
            <p className="text-xs text-zinc-400">Software Solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-100 transition hover:text-[#0ec9c3]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-[#eee8aa] px-3 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-[#f5f0b8]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
