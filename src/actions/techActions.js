import { GET_TECHS, DELETE_TECH, ADD_TECH, TECHS_ERROR, SET_LOADING } from './types';

//Getting all techs
export const getTechs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/techs');
		const data = await res.json();

		dispatch({
			type: GET_TECHS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

//Adding the techs
export const addTech = (tech) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/techs', {
			method: 'POST',
			body: JSON.stringify(tech),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		dispatch({
			type: ADD_TECH,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TECHS_ERROR,
			payload: error.response.statusText,
		});
	}
};

export const deleteTech = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/techs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_TECH,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response.statusText,
		});
	}
};

//Setting the loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
