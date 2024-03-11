import AddItem from "./AddItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <AddItem
          key={(item, index)}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></AddItem>
      ))}
    </div>
  );
};

export default TodoItems;
