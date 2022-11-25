import styles from "./PriorityChip.module.scss";

export type Priority = "low" | "medium" | "high";

export const PriorityChip = ({ priority }: { priority: Priority }) => {
  return <div className={styles[priority]}>{priority}</div>;
};
