import type { Metadata } from "next";
import { siteConfig } from "@/data/site-content";

const baseUrl = "https://hvktechinnovationsin.godaddysites.com";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
