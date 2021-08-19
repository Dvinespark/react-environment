const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
	type: INCREMENT
});

const decrement = () => ({
	type: DECREMENT
});

export { INCREMENT, DECREMENT, increment, decrement };