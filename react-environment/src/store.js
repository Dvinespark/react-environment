import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const reducers = {
	todos,
};

const rootReducer = combineReducers(reducers);


const configureStore = () => createStore(rootReducer);

export default configureStore;