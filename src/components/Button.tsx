import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}&ensp;
      <PlusCircle weight="bold" size={16} />
    </button>
  );
}
