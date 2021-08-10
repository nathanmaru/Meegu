import { userGoogleAuth, load_user } from '../authSlice';
import { axios } from 'axios';
export const googleAuthenticate = (state, code) => async (dispatch) => {
	if (state && code && !localStorage.getItem('access')) {
		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		};

		const details = {
			state: state,
			code: code,
		};

		const formBody = Object.keys(details)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
			.join('&');

		try {
			const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`, config);

			dispatch({
				type: userGoogleAuth,
			});

			dispatch(load_user());
		} catch (err) {}
	}
};
