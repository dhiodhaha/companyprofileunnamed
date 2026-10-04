import { EmptyState } from "@/components/arc/empty-state/empty-state";
import { LinkAction } from "@/components/page/section";
import { SiteFrame } from "@/components/site/frame";
import styles from "./not-found.module.css";

/** The 404 lives outside the site group so it also catches unmatched URLs, and renders the frame itself. */
export default function NotFound() {
  return (
    <SiteFrame>
      <section className={styles.page} aria-labelledby="not-found-title">
        <div className={styles.inner}>
          <h1 id="not-found-title" className={styles.title}>That page is not here</h1>
          <EmptyState
            title="No page at this address"
            description="The link may be out of date, or the page may have moved. The work, the process, and the way to reach the studio are all one click away."
            action={<LinkAction href="/" primary>Back to the studio</LinkAction>}
            label="Page not found"
          />
        </div>
      </section>
    </SiteFrame>
  );
}
