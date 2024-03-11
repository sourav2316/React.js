function AddTodo() {
  return (
    <div className="container">
      <div className="row sk-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Name" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success sk-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
