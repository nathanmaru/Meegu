import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Loader from '../loader';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
	const { user, isloading } = useSelector((state) => state.user);
	if (isloading) return <div>{Loader}</div>;
	const loginErrorMessage = (
		<div>
			Please <Link to='/login'>login</Link> in order to view this part of the application.
		</div>
	);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!user) return <div>{loginErrorMessage}</div>;
				return Component ? <Component {...props} /> : render(props);
			}}
		/>
	);
};

export default ProtectedRoute;
