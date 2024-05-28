import styles from "./App.module.css";
import "./global.css";
import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button className="">
            Criar&ensp;
            <PlusCircle weight="bold" size={16} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
