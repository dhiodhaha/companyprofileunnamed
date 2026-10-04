import styles from "./mark.module.css";

/** The Unnamed+ mark: a hairline square with a plus set inside it. */
export function Mark() {
  return (
    <svg className={styles.mark} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="7" />
      <path d="M16 10.5v11M10.5 16h11" strokeLinecap="round" />
    </svg>
  );
}
