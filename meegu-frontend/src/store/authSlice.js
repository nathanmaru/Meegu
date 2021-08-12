import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './actions/api';
import { axios } from 'axios';

export const userSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		isloading: false,
		isAuthenticated: false,
	},
	reducers: {
		//actions => action handlers
		//use this when you talk to the state
		userRequested: (auth, action) => {
			auth.isloading = true;
		},
		userRequestFailed: (auth, action) => {
			auth.isloading = false;
		},
		userLoggedIn: (auth, action) => {
			localStorage.setItem('access', action.payload.access);
		},
		userLoaded: (auth, action) => {
			auth.user = action.payload;
			auth.isloading = false;
		},
		userLoggedOut: (auth, action) => {
			localStorage.removeItem('access');
			auth.isAuthenticated = false;
			auth.user = null;
		},
		userSignedUp: (auth, action) => {
			auth.isAuthenticated = false;
		},
		userGoogleAuth: (auth, action) => {
			localStorage.setItem('access', action.payload.access);
		},
		userAuthenticated: (auth, action) => {
			auth.isAuthenticated = true;
		},
	},
});

const { userAuthenticated, userLoggedIn, userSignedUp, userLoaded, userRequested, userRequestFailed } =
	userSlice.actions;
export const { userLoggedOut, userGoogleAuth } = userSlice.actions;

export default userSlice.reducer;

//action creators

export const login = (email, password) =>
	apiCallBegan({
		url: '/auth/jwt/create/',
		method: 'post',
		data: { email, password },
		onSuccess: userLoggedIn.type,
	});

export const signup = (first_name, last_name, email, password, re_password) =>
	apiCallBegan({
		url: '/auth/users/',
		method: 'post',
		data: { email, password, re_password, first_name, last_name },
		onSuccess: userSignedUp.type,
	});

export const activateAccount = (uid, token) =>
	apiCallBegan({
		url: '/auth/users/activation/',
		method: 'post',
		data: { uid, token },
		onSuccess: 'auth/userActivate',
	});

export const load_user = () =>
	apiCallBegan({
		url: '/auth/users/me/',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `JWT ${localStorage.getItem('access')}`,
			Accept: 'application/json',
		},
		onSuccess: userLoaded.type,
		onStart: userRequested.type,
		onError: userRequestFailed.type,
	});

export const reset_password = (email) =>
	apiCallBegan({
		url: '/auth/users/reset_password/',
		data: { email },
		onSuccess: 'auth/userResetPassword',
	});
export const reset_password_confirm = (uid, token, new_password, re_new_password) =>
	apiCallBegan({
		url: '/auth/users/reset_password_confirm/',
		data: { uid, token, new_password, re_new_password },
		onSuccess: 'auth/userResetPasswordConfirm',
	});

export const googleAuth = (formBody) =>
	apiCallBegan({
		url: `/auth/o/google-oauth2/?${formBody}`,
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		onSuccess: userLoggedIn.type,
	});
export const googleAuthenticate = (state, code) => {
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

		apiCallBegan({
			url: `/auth/o/google-oauth2/?${formBody}`,
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			onSuccess: userLoggedIn.type,
		});
	}
};
export const checkAuth = () =>
	apiCallBegan({
		url: '/auth/jwt/verify/',
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		data: JSON.stringify({ token: localStorage.getItem('access') }),
		onSuccess: userAuthenticated.type,
	});

///selectors

export const getUser = createSelector(
	(state) => state.user.user,
	(user) => user
);
