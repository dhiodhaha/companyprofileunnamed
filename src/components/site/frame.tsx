"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/arc/blocks/site-header/site-header";
import { SiteFooter } from "@/components/arc/blocks/site-footer/site-footer";
import { auditMailto, brand, email, footerColumns, footerLegal, navItems, sectionFor } from "@/content/site";
import { Mark } from "./mark";

const mark = <Mark />;

/** The header, the page, and the footer. The header marks the section the current path belongs to. */
export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <SiteHeader
        variant="mega"
        brand={{ ...brand, mark }}
        items={navItems}
        current={sectionFor(pathname)}
        secondaryAction={{ label: "Email the studio", href: `mailto:${email}` }}
        primaryAction={{ label: "Request an audit", href: auditMailto }}
        label="Main"
      />
      <main>{children}</main>
      <SiteFooter
        variant="columns"
        brand={{ ...brand, mark }}
        tagline="Design and engineering studio"
        columns={footerColumns}
        newsletter={null}
        socials={[]}
        status={null}
        legal={footerLegal}
        year={2026}
      />
    </>
  );
}
