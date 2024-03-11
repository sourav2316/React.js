import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoName = [
    {
      name: "Buy Milk",
      dueDate: "06/10/2024",
    },
    {
      name: "Go to college",
      dueDate: "06/10/2024",
    },
    {
      name: "MARRIAGE",
      dueDate: "04/03/2024",
    },
    {
      name: "Anniversary",
      dueDate: "04/03/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoName}></TodoItems>
    </center>
  );
}

export default App;
