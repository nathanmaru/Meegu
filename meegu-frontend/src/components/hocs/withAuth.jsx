import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function withAuth(Component) {
	return function WithAuth(props) {
		const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

		const loginErrorMessage = (
			<div>
				Please <Link to='/login'>login</Link> in order to view this part of the application.
			</div>
		);

		return <div>{isAuthenticated ? <Component {...props} /> : loginErrorMessage}</div>;
	};
}

export default withAuth;
