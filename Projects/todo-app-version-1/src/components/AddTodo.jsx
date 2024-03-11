function AddTodo() {
  return (
    <div className="container">
      <div class="row sk-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Name" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success sk-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
