import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './actions';
import TodoListItem from './TodoListItem';
import './TodoList.css'
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [], onRemovePressed }) => (
	<div className="list_wrapper">
		<NewTodoForm />
		{todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />)}
	</div>
);

const mapStateToProps = state => ({
	todos: state.todos,
});
const mapDispatachToProps = dispatch => ({
	onRemovePressed: text => dispatch(removeTodo(text)),
})

export default connect(mapStateToProps, mapDispatachToProps)(TodoList);