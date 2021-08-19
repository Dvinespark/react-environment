import './App.css';
import TodoList from './todos/TodoList';
import Counter from './counter/Counter';
import rootReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// First create Store

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const App = () => {
  return (
    <div className="App">
      <h1>MyTodos</h1>
      <hr />
      <TodoList />
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
