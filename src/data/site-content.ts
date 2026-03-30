export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
};

export const siteConfig = {
  name: "hvktechinnovations.in",
  title: "Innovative Software Solutions for Businesses",
  tagline: "Empowering your company with cutting-edge technology.",
  promoText: "Get 20% off this month when you try our services!",
  phonePrimary: "+91 7671918171",
  phoneSecondary: "8121288894",
  phoneHref: "tel:+917671918171",
  whatsappHref: "https://wa.me/18121288894",
  address: "P5JV+8V Visakhapatnam, Andhra Pradesh, India",
  ogImage: "/assets/hero.jpg",
  intro: {
    eyebrow: "Hello",
    title: "Transforming Businesses with hvktechinnovations.in",
    description:
      "We are on a mission to transform businesses with our cutting-edge software solutions. Our team of skilled professionals is committed to delivering exceptional results and helping you stay ahead of the competition.",
  },
  about: {
    title: "About hvktechinnovations.in",
    cards: [
      {
        title: "Our Team",
        image: "/assets/about-team.jpg",
        alt: "Team collaboration at workstation",
        description:
          "Our team is comprised of experienced software developers, designers, and project managers who are dedicated to delivering exceptional results. We work collaboratively with our clients to ensure that their unique needs are met and that they receive the best possible service.",
      },
      {
        title: "Our Expertise",
        image: "/assets/about-expertise.jpg",
        alt: "Developer reviewing architecture diagrams",
        description:
          "At hvktechinnovations.in, we have expertise in a wide range of software development areas, including web development, mobile app development, and custom software development. We use the latest technologies and tools to ensure that our clients receive cutting-edge solutions that drive their business forward.",
      },
      {
        title: "Our Mission",
        image: "/assets/about-mission.jpg",
        alt: "Business technology strategy discussion",
        description:
          "At hvktechinnovations.in, our mission is to provide top-quality software solutions to businesses of all sizes. We strive to exceed our clients' expectations and deliver innovative solutions that drive growth and success.",
      },
    ],
  },
  featured: {
    title: "Discover the Power of HVK Tech Innovation Software Solutions with Koilada Aravind",
    description:
      "We understand that every business has unique needs and challenges. That's why we offer a wide range of software solutions designed to help you streamline your operations and Jobs, increase efficiency in Training, and drive growth in career. From custom software development to cloud-based applications, our team of experts has the expertise and experience to help you achieve your goals.",
  },
  careers: {
    title: "We're Hiring!",
    heading: "Join Our Team",
    body: "If you're interested in one of our open positions, start by applying here and attaching your resume.",
  },
  contact: {
    title: "Contact Us",
    heading: "Questions or Comments?",
    body: "We know that our clients have unique needs. Send us a message, and we will get back to you soon.",
    hoursLabel: "Today",
    hoursValue: "Closed",
  },
  newsletter: {
    title: "Subscribe",
    body: "Get 10% off your first purchase when you sign up for our newsletter!",
  },
  footer: {
    copyright: "Copyright © 2025 hvktechinnovations.in - All Rights Reserved.",
  },
};

export const services: ServiceItem[] = [
  {
    slug: "automation-testing",
    title: "AUTOMATION TESTING",
    shortDescription: "End-to-end test strategy and QA automation for faster, safer releases.",
  },
  {
    slug: "data-engineering",
    title: "DATA ENGINEERING",
    shortDescription: "Scalable data pipelines and analytics foundations for informed decisions.",
  },
  {
    slug: "java-developer",
    title: "JAVA DEVELOPER",
    shortDescription: "Enterprise-grade Java application development and modernization services.",
  },
  {
    slug: "supply-and-chain-management",
    title: "Supply and Chain Management",
    shortDescription: "Digital solutions to optimize inventory, workflows, and fulfillment outcomes.",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    shortDescription: "Security-first assessments and controls to protect your systems and data.",
  },
  {
    slug: "python-developer",
    title: "Python Developer",
    shortDescription: "Automation, backend systems, and integrations built with Python expertise.",
  },
  {
    slug: "business-aanalyst",
    title: "Business Analyst",
    shortDescription: "Requirement discovery and solution mapping aligned with business goals.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
