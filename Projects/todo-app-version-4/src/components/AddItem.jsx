import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-stored";

function AddItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row sk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sk-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
