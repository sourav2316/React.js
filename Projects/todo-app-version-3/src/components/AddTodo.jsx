import { RiMenuAddLine } from "react-icons/ri";

import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const addButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container">
      <form className="row sk-row" onSubmit={addButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Name"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success sk-button">
            <RiMenuAddLine />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
