import { connect } from 'react-redux';
import Loader from '../common/loader';
const UserProfile = ({ user, isLoading }) => {
	const Profile = () => {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<div className='card user-card'>
							<div className='card-header'>
								<h5>Profile</h5>
							</div>
							<div className='card-block'>
								<div className='user-image'>
									<img
										src='https://bootdey.com/img/Content/avatar/avatar7.png'
										alt=''
										className='img-radius'
									/>
								</div>
								<h6 className='f-w-600 m-t-25 m-b-10'>
									{user.first_name} {user.last_name}
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return <div>{isLoading ? <Loader /> : <Profile />}</div>;
};

const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoading: state.user.isLoading,
});
export default connect(mapStateToProps, null)(UserProfile);
