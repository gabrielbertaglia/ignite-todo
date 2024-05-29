import { Check, Trash } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";
import { TasksProps } from "../App";

interface TodoListProps {
  task: TasksProps;
}

export function TodoList({ task }: TodoListProps) {
  const checkboxCheckedClassname = task.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = task.isChecked
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <label htmlFor="checkbox">
        <input readOnly type="checkbox" checked={task.isChecked} />
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          {task.isChecked && (
            <Check weight="bold" className={styles.icon} size={12} />
          )}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
          {task.title}
        </p>
      </label>
      <button>
        <Trash />
      </button>
    </div>
  );
}
