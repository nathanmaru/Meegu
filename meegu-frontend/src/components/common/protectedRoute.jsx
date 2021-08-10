import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Loader from '../loader';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
	const { user, isloading } = useSelector((state) => state.user);
	console.log(user, isloading);
	if (isloading) return <div>{Loader}</div>;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!user) return <Redirect to='/login' />;
				return Component ? <Component {...props} /> : render(props);
			}}
		/>
	);
};

export default ProtectedRoute;
