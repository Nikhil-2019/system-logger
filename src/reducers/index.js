import { combineReducers } from 'redux';
import logReducer from './logReducer';

//combining all the reducers

export default combineReducers({
	//name acessible : reducer
	log: logReducer,
});
