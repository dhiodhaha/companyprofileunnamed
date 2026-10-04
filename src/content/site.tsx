import { Boxes, Layers, Users } from "lucide-react";
import type { SiteHeaderItem } from "@/components/arc/blocks/site-header/site-header";
import type { SiteFooterColumn, SiteFooterLink } from "@/components/arc/blocks/site-footer/site-footer";

export const brand = { name: "Unnamed+", href: "/" };

export const email = "hello@unnamed.plus";
export const site = "https://unnamed.plus";

const mailto = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const auditMailto = mailto("Website audit request");
export const discoveryMailto = mailto("Discovery call");
export const proposalMailto = mailto("Proposal request");
export const briefMailto = mailto("Project brief");

const glyph = { size: 16, strokeWidth: 1.75, "aria-hidden": true } as const;

/** Section values match the keys the header marks as current. */
export const navItems: SiteHeaderItem[] = [
  {
    value: "work",
    label: "Work",
    links: [
      { label: "Selected work", description: "Websites and digital products we have designed and built", href: "/work", icon: <Boxes {...glyph} /> },
      { label: "iMOW Indonesia", description: "Industrial product catalogue turned into a sales platform", href: "/work/imow" },
      { label: "PT Gunung Kendali Docking", description: "An engineering business buyers can evaluate in minutes", href: "/work/gunung-kendali" },
    ],
  },
  {
    value: "services",
    label: "Services",
    links: [
      { label: "What we build", description: "Websites, web applications, and company profiles", href: "/what-we-build", icon: <Layers {...glyph} /> },
      { label: "What the work achieves", description: "Convert, communicate, and operate", href: "/outcomes" },
      { label: "For manufacturing", description: "Help buyers understand what the company can do", href: "/manufacturing" },
    ],
  },
  {
    value: "studio",
    label: "Studio",
    links: [
      { label: "Why Unnamed", description: "Design and engineering stay in the same team", href: "/why-unnamed", icon: <Users {...glyph} /> },
      { label: "Team", description: "A compact multidisciplinary core team", href: "/team" },
      { label: "Delivery and governance", description: "Clear ownership throughout the project", href: "/delivery" },
    ],
  },
  { value: "process", label: "Process", href: "/process" },
  { value: "proof", label: "Proof", href: "/proof" },
];

/** Three columns, which is what the Arc footer block lays out in one row. Contact lives in the bottom row. */
export const footerColumns: SiteFooterColumn[] = [
  {
    title: "Work",
    links: [
      { label: "Selected work", href: "/work" },
      { label: "iMOW Indonesia", href: "/work/imow" },
      { label: "PT Gunung Kendali Docking", href: "/work/gunung-kendali" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "What we build", href: "/what-we-build" },
      { label: "What the work achieves", href: "/outcomes" },
      { label: "For manufacturing", href: "/manufacturing" },
      { label: "Our approach", href: "/approach" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Why Unnamed", href: "/why-unnamed" },
      { label: "Team", href: "/team" },
      { label: "Process", href: "/process" },
      { label: "Delivery and governance", href: "/delivery" },
      { label: "Proof", href: "/proof" },
      { label: "Company profile", href: "/company-profile" },
    ],
  },
];

/** Contact links for the footer's bottom row, beside the copyright. */
export const footerLegal: SiteFooterLink[] = [
  { label: "Request an audit", href: auditMailto },
  { label: "Email the studio", href: `mailto:${email}` },
  { label: "unnamed.plus", href: site, external: true },
];

/** Which header item is current for a path. */
export function sectionFor(pathname: string): string | undefined {
  const match = navItems.find(item => {
    if (item.value === "work" && pathname.startsWith("/work")) return true;
    if (item.value === "services" && ["/what-we-build", "/outcomes", "/manufacturing"].some(path => pathname.startsWith(path))) return true;
    if (item.value === "studio" && ["/why-unnamed", "/team", "/delivery"].some(path => pathname.startsWith(path))) return true;
    return item.href === pathname;
  });
  return match?.value;
}
