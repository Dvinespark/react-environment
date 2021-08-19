import React from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counter';


const Counter = () => {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Counter</h1>
			<p>This is counter. A simple example to demonstrate react redux.</p>
			<hr />
			<div className="counter-form">
				<h3><span>Initial Value: </span>{counter}</h3>
				<button
					onClick={() => dispatch(increment(0))}
					className="increment">Increment</button>
				<button
					onClick= {() => dispatch(decrement(0))}
					className="decrement">Decrement</button>
			</div>
		</div>
	);
}

export default Counter;