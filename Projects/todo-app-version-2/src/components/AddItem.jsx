function AddItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row sk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
