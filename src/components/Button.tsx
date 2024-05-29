import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}&ensp;
      <PlusCircle weight="bold" size={16} />
    </button>
  );
}
