import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItem from "./components/AddItem1";
import AddItem2 from "./components/AddItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>

      <div className="items-container">
        <AddItem></AddItem>
        <AddItem2></AddItem2>
      </div>
    </center>
  );
}

export default App;
