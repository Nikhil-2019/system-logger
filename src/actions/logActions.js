import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG,
	SEARCH_LOGS,
} from './types';

//Here we define all the actions performed like fetching data setting etc.

//Get Logs From Servers
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//Add new 	LOG
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//Delete Log from the server
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();
		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};
//Update Log from server
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//Search Logs From Servers
export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//Set current log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

//Setting the loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
