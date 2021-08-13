import axios from 'axios';
import * as actions from '../actions/api';
import { load_user } from '../authSlice';

const api =
	({ dispatch }) =>
	(next) =>
	async (action) => {
		if (action.type !== actions.apiCallBegan.type) return next(action);

		const { url, method, headers, data, onSuccess, onError, onStart } = action.payload;

		if (onStart) dispatch({ type: onStart });

		try {
			const response = await axios.request({
				baseURL: 'http://localhost:8000',
				headers,
				url,
				method,
				data,
			});
			next(action);
			//general
			dispatch(actions.apiCallSuccess(response.data));
			if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
			//After Logged In
			if (onSuccess === 'auth/userLoggedIn') {
				dispatch(load_user());
			}
		} catch (error) {
			//general error handling
			dispatch(actions.apiCallFailed(error.message));
			if (onError) dispatch({ type: onError, payload: error.message });
		}
	};

export default api;
