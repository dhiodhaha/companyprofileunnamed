import type { ReactNode } from "react";
import { SiteFrame } from "@/components/site/frame";

/** The public site: header, page, and footer. The company profile document sits outside this group. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteFrame>{children}</SiteFrame>;
}
