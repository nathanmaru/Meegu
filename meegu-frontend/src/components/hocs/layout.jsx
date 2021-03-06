import { useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { googleAuth, checkAuth, load_user } from '../../store/authSlice';

const Layout = ({ checkAuth, load_user, googleAuth, isAuthenticated, children }) => {
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

			const formBody = Object.keys(details)
				.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
				.join('&');
			googleAuth(formBody);
		} else {
			if (localStorage.getItem('access')) {
				checkAuth();
				load_user();
			}
		}
	}, [location]);

	return <div>{children}</div>;
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { checkAuth, load_user, googleAuth })(Layout);
