import type { ReactNode } from "react";
import { MetricCard } from "@/components/arc/metric-card/metric-card";
import styles from "./section.module.css";

/**
 * One marketing section. It owns the container and the vertical rhythm, so nothing inside it adds a second gutter.
 * With an `id` and a `title` the section labels itself from its own heading.
 */
export function Section({
  id,
  title,
  lede,
  children,
  width = "wide",
}: {
  id?: string;
  title?: string;
  lede?: ReactNode;
  children?: ReactNode;
  width?: "wide" | "read";
}) {
  const headingId = id && title ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} aria-label={!headingId && title ? title : undefined} className={[styles.section, width === "read" ? styles.read : ""].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        {title && (
          <header className={styles.head}>
            <h2 id={headingId} className={styles.title}>{title}</h2>
            {lede && <p className={styles.lede}>{lede}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

/** The opening of an inner page: one h1, one short paragraph, and the action that page exists for. */
export function PageIntro({ title, description, children, aside }: { title: string; description?: ReactNode; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section className={styles.intro}>
      <div className={styles.introInner}>
        <div className={styles.introCopy}>
          <h1 className={styles.introTitle}>{title}</h1>
          {description && <p className={styles.introLede}>{description}</p>}
          {children}
        </div>
        {aside && <div className={styles.introAside}>{aside}</div>}
      </div>
    </section>
  );
}

/** A short list of labelled facts, such as the industry, engagement, and scope of a project. */
export function FactList({ facts }: { facts: { label: string; value: ReactNode }[] }) {
  return (
    <dl className={styles.facts}>
      {facts.map(fact => (
        <div key={fact.label} className={styles.fact}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A grid of short labelled items: outcomes, disciplines, capabilities, deliverables. */
export function FeatureGrid({ columns = 3, children }: { columns?: 2 | 3 | 4; children: ReactNode }) {
  return <div className={styles.features} data-columns={columns}>{children}</div>;
}

export function Feature({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className={styles.feature}>
      <h3 className={styles.featureTitle}>{title}</h3>
      {children && <p className={styles.featureBody}>{children}</p>}
    </div>
  );
}

/** An ordered process. The numbers are text, so they read as steps rather than decoration. */
export function StepList({ steps }: { steps: { title: string; body: string; output?: string }[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
          <div className={styles.stepBody}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p>{step.body}</p>
            {step.output && <p className={styles.output}><strong>Output</strong> {step.output}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Numbers that can be checked by looking at the shipped work: counts of things that were structured, not business results.
 */
export function EvidenceStrip({ items }: { items: { label: string; value: number; suffix?: string; context: string }[] }) {
  return (
    <div className={styles.grid} data-columns="4" role="list">
      {items.map(item => (
        <div role="listitem" key={item.label}>
          <MetricCard label={item.label} value={item.value} suffix={item.suffix} context={item.context} />
        </div>
      ))}
    </div>
  );
}

/** A group of cards that share edges. */
export function CardGrid({ columns = 3, children }: { columns?: 2 | 3 | 4; children: ReactNode }) {
  return <div className={styles.grid} data-columns={columns}>{children}</div>;
}

export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {children}
    </div>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className={styles.cardBody}>{children}</p>;
}

/** Short items that need no card of their own. */
export function HairlineList({ items }: { items: ReactNode[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>{item}</li>
      ))}
    </ul>
  );
}

/** Copy beside a visual, which collapses to one column on narrow screens. */
export function Split({ children }: { children: ReactNode }) {
  return <div className={styles.split}>{children}</div>;
}

/** Body copy with a readable measure. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className={styles.prose}>{children}</div>;
}

/** A pull statement that carries a section's conclusion. */
export function Statement({ children }: { children: ReactNode }) {
  return <p className={styles.statement}>{children}</p>;
}

/** A row of actions, with the primary one first. */
export function Actions({ children }: { children: ReactNode }) {
  return <div className={styles.actions}>{children}</div>;
}

/**
 * A navigation action. Arc buttons are buttons, so a link stays a link: the same shape and type scale, still a real anchor
 * that the browser and a screen reader treat as navigation.
 */
export function LinkAction({ href, children, primary = false, external = false }: { href: string; children: ReactNode; primary?: boolean; external?: boolean }) {
  return (
    <a className={styles.linkAction} data-primary={primary || undefined} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
