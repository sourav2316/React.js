import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-stored";
import AddItem from "./AddItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <AddItem
          key={(item, index)}
          todoDate={item.dueDate}
          todoName={item.name}
        ></AddItem>
      ))}
    </div>
  );
};

export default TodoItems;
