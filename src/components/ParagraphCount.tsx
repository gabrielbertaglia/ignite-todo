import styles from "./ParagraphCount.module.css";

type TypeParagraph = "created" | "finished";

interface ParagraphProps {
  type: TypeParagraph;
  count: number | string;
  children: React.ReactNode;
}

export function Paragraph({ type, count = 0, children }: ParagraphProps) {
  return (
    <div>
      <strong className={type === "created" ? styles.created : styles.finished}>
        {children}
      </strong>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
