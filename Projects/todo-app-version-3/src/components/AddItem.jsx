import { MdDeleteSweep } from "react-icons/md";

function AddItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row sk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sk-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
