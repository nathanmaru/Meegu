import { userLoggedOut } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const dispatch = useDispatch();
	const loggout_user = () => dispatch(userLoggedOut());
	return (
		<header className='pb-3 mb-4 border-bottom'>
			<a href='/' className='d-flex align-items-center text-dark text-decoration-none'>
				<span className='fs-4'>Meegu</span>
			</a>
			<Link to='/newsfeed'>Newsfeed</Link>
			<button className='btn btn-primary btn-xs' onClick={loggout_user}>
				Logout
			</button>
		</header>
	);
};

export default NavBar;
