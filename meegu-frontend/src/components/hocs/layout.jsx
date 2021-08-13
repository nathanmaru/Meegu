import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import NavBar from '../common/navbar';
import { connect } from 'react-redux';
import { googleAuth, checkAuth, load_user } from '../../store/authSlice';

const Layout = ({ checkAuth, load_user, googleAuth, children }) => {
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

			googleAuth(formBody);
		} else {
			if (localStorage.getItem('access')) {
				checkAuth();
				load_user();
			}
		}
	}, [location]);

	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
};

export default connect(null, { checkAuth, load_user, googleAuth })(Layout);
