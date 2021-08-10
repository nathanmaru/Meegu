import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { googleAuth, checkAuth, load_user } from '../../store/authSlice';
import { Link } from 'react-router-dom';

function withAuth(Component) {
	return function WithAuth(props) {
		const dispatch = useDispatch();
		let location = useLocation();

		useEffect(() => {
			const values = queryString.parse(location.search);
			const state = values.state ? values.state : null;
			const code = values.code ? values.code : null;

			if (state && code) {
				googleAuth(state, code);
			} else {
				dispatch(checkAuth());
				dispatch(load_user());
			}
		}, [location]);

		const { isAuthenticated } = useSelector((state) => state.user);

		console.log(isAuthenticated);
		const loginErrorMessage = (
			<div>
				Please <Link to='/login'>login</Link> in order to view this part of the application.
			</div>
		);

		console.log(isAuthenticated);
		return <div>{isAuthenticated === true ? <Component {...props} /> : loginErrorMessage}</div>;
	};
}

export default withAuth;
