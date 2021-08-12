import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { googleAuth, checkAuth, load_user } from '../../store/authSlice';
import { Link } from 'react-router-dom';

function withSocialAuth(Component) {
	return function WithAuth(props) {
		const dispatch = useDispatch();
		let location = useLocation();

		useEffect(() => {
			const values = queryString.parse(location.search);
			const state = values.state ? values.state : null;
			const code = values.code ? values.code : null;
			console.log(state, code);
			if (state && code) {
				const details = {
					state,
					code,
				};
				console.log(details);

				const formBody = Object.keys(details)
					.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
					.join('&');
				dispatch(googleAuth(formBody));
			}
		}, [location]);

		return <Component {...props} />;
	};
}

export default withSocialAuth;
