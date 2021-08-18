import './App.css';
import TodoList from './todos/TodoList';

const App = () => {
  const todos = [{ text: "hello world" }, {text: "wowo"}]
  return (
    <div className="App">
      <h1>MyTodos</h1>
      <hr />
      <TodoList todos={ todos }/>

    </div>
  );
}

export default App;
