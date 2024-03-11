import AddItem from "./AddItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <AddItem todoDate={item.dueDate} todoName={item.name}></AddItem>
      ))}
    </div>
  );
};

export default TodoItems;
