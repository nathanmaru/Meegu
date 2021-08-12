import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import NavBar from '../common/navbar';
import { googleAuth, checkAuth, load_user } from '../../store/authSlice';

const Layout = ({ children }) => {
	const dispatch = useDispatch();

	let location = useLocation();

	useEffect(() => {
		const values = queryString.parse(location.search);
		const state = values.state ? values.state : null;
		const code = values.code ? values.code : null;

		if (state && code && !localStorage.getItem('access')) {
			const details = {
				state,
				code,
			};
			console.log(details);

			const formBody = Object.keys(details)
				.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
				.join('&');
			console.log(formBody);

			dispatch(googleAuth(formBody));
		}
		if (localStorage.getItem('access')) {
		}
	}, [location]);

	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
};

export default Layout;
