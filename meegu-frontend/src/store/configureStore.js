import { configureStore } from '@reduxjs/toolkit';
import userReducer from './authSlice';
import api from './middleware/api';

export default configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});
