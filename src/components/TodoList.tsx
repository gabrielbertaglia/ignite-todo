import { Check, Trash } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";
import { TasksProps } from "../App";

interface TodoListProps {
  task: TasksProps;
  onDeleteTask(id: string): void;
  onChangeTask({ id, checked }: { id: string; checked: boolean }): void;
}

export function TodoList({ task, onDeleteTask, onChangeTask }: TodoListProps) {
  const checkboxCheckedClassname = task.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = task.isChecked
    ? styles["paragraph-checked"]
    : "";

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleChangeTask() {
    onChangeTask({ id: task.id, checked: !task.isChecked });
  }

  return (
    <div className={styles.container}>
      <label htmlFor="checkbox" onClick={handleChangeTask}>
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
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
