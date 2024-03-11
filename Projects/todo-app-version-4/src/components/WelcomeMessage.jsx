import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-stored";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <h1 className={styles.welcome}>Enter Your 1st Todo</h1>
    )
  );
};

export default WelcomeMessage;
