import { connect } from 'react-redux';
import Loader from './loader';

const NewsFeed = ({ user, isLoading }) => {
	return <div>{isLoading ? <Loader /> : <div>Hello {user.first_name}</div>}</div>;
};

const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoading: state.user.isLoading,
});
export default connect(mapStateToProps, null)(NewsFeed);
