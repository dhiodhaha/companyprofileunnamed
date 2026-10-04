import type { ComponentProps, ComponentType } from "react";
import {
  Branches,
  Cabinet,
  Dish,
  Exploded,
  Keyboard,
  Laptop,
  Lockers,
  Patch,
  Phosphor,
  Riffle,
  Router,
  Slow,
  Terminal,
  Terrain,
  Turntable,
  Vault,
} from "@/components/ui/hairline";
import styles from "./figure.module.css";

type FigureComponent = ComponentType<ComponentProps<typeof Terrain>>;

/** The Hairline figures this site uses, by name. Each one answers the pointer and carries its own description. */
const FIGURES = {
  terrain: Terrain,
  exploded: Exploded,
  riffle: Riffle,
  router: Router,
  patch: Patch,
  turntable: Turntable,
  slow: Slow,
  vault: Vault,
  cabinet: Cabinet,
  terminal: Terminal,
  dish: Dish,
  branches: Branches,
  lockers: Lockers,
  keyboard: Keyboard,
  laptop: Laptop,
  phosphor: Phosphor,
} satisfies Record<string, FigureComponent>;

export type FigureName = keyof typeof FIGURES;

/**
 * A Hairline illustration with its description. The figure fills the width at a 5:4 ratio, so it needs no fixed size and
 * never shifts the page when it draws. `label` is what a screen reader reads; `caption` is the line under it.
 */
export function Figure({
  name,
  label,
  caption,
  intensity = 0.5,
  bare = false,
  className,
}: {
  name: FigureName;
  label: string;
  caption?: string;
  intensity?: number;
  bare?: boolean;
  className?: string;
}) {
  const Component = FIGURES[name];
  return (
    <figure className={[styles.figure, bare ? styles.bare : "", className].filter(Boolean).join(" ")}>
      <div className={styles.canvas}>
        <Component label={label} intensity={intensity} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
