import { TasksProps } from "../App";
import styles from "./ListHeader.module.css";
import { Paragraph } from "./ParagraphCount";

interface ListHeaderProps {
  tasks: TasksProps[];
}

export function ListHeader({ tasks }: ListHeaderProps) {
  const tasksCompleted = tasks.reduce((accumulator, currentValue) => {
    if (currentValue.isChecked) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className={styles.todoHeader}>
      <Paragraph count={tasks.length} type="created">
        Tarefas criadas
      </Paragraph>
      <Paragraph type="finished" count={`${tasksCompleted} de ${tasks.length}`}>
        Concluídas
      </Paragraph>
    </div>
  );
}
