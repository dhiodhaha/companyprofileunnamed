"use client";

import { Button } from "@/components/arc/button/button";

/** Screen only. Hidden in print, so it never reaches the PDF. */
export function PrintButton() {
  return <Button onClick={() => window.print()}>Print A4 PDF</Button>;
}
