import styles from "./App.module.css";
import "./global.css";

import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ListHeader } from "./components/ListHeader";
import { Empty } from "./components/Empty";
import { TodoList } from "./components/TodoList";

export interface TasksProps {
  id: string;
  title: string;
  isChecked: boolean;
}

const tasks: TasksProps[] = [
  {
    id: uuidv4(),
    title: "Terminar desafio",
    isChecked: false,
  },
  {
    id: uuidv4(),
    title: "Terminar desafio",
    isChecked: true,
  },
];

function App() {
  // const [tasks, setTasks] = useState<TasksProps[]>([]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button>Criar</Button>
        </div>
        <div className={styles.todo}>
          <ListHeader tasks={tasks} />
          {tasks.length > 0 ? (
            <div className={styles.todoContainerWithTask}>
              {tasks.map((task) => (
                <TodoList task={task} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
