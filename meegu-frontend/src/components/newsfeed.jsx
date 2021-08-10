import { useSelector } from 'react-redux';
import Loader from './loader';
import withAuth from './hocs/withAuth';

const NewsFeed = () => {
	const { user, isloading } = useSelector((state) => state.user);

	return <div>{isloading ? <Loader /> : <div>Hello {user.first_name}</div>}</div>;
};

export default withAuth(NewsFeed);
