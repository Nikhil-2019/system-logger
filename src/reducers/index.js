import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

//combining all the reducers

export default combineReducers({
	//name acessible : reducer
	log: logReducer,
	tech: techReducer,
});
