function AddItem2() {
  let todoName = "Buy Dudu";
  let todoDate = "06/10/2024";
  return (
    <div className="container">
      <div class="row sk-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem2;
