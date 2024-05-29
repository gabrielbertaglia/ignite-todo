import styles from "./App.module.css";
import "./global.css";

import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ListHeader } from "./components/ListHeader";
import { Empty } from "./components/Empty";
import { TodoList } from "./components/TodoList";
import { ChangeEvent, useState } from "react";

export interface TasksProps {
  id: string;
  title: string;
  isChecked: boolean;
}

// const tasks: TasksProps[] = [
//   {
//     id: uuidv4(),
//     title: "Terminar desafio",
//     isChecked: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Terminar desafio",
//     isChecked: true,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [addNewTask, setAddNewTask] = useState("");

  function handleChangeAddNewTask(event: ChangeEvent<HTMLInputElement>) {
    setAddNewTask(event.target.value);
  }

  function handleCreateTask() {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: addNewTask,
        isChecked: false,
      },
    ]);
    setAddNewTask("");
  }

  function onDeleteTask(id: string) {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  }

  function onChangeTask({ id, checked }: { id: string; checked: boolean }) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: checked };
      }
      return { ...task };
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Input
            type="text"
            name="newTask"
            placeholder="Adicione uma nova tarefa"
            value={addNewTask}
            onChange={handleChangeAddNewTask}
          />
          <Button disabled={addNewTask.length === 0} onClick={handleCreateTask}>
            Criar
          </Button>
        </div>
        <div className={styles.todo}>
          <ListHeader tasks={tasks} />
          {tasks.length > 0 ? (
            <div className={styles.todoContainerWithTask}>
              {tasks.map((task) => (
                <TodoList
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onChangeTask={onChangeTask}
                />
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
