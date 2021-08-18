import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css'
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [] }) => (
	<div className="list_wrapper">
		<NewTodoForm />
		{todos.map(todo => <TodoListItem todo={todo} />)}
	</div>
);

export default TodoList;