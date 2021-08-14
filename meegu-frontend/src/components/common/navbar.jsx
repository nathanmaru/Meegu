import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { userLoggedOut } from '../../store/authSlice';

const Navbar = ({ isAuthenticated }) => {
	const dispatch = useDispatch();
	const [redirect, setRedirect] = useState(false);

	const logout_user = () => {
		dispatch(userLoggedOut());
		setRedirect(true);
	};

	const guestLinks = () => (
		<Fragment>
			<li className='nav-item'>
				<Link className='nav-link' to='/login'>
					Login
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/signup'>
					Sign Up
				</Link>
			</li>
		</Fragment>
	);
	const authLinks = () => (
		<Fragment>
			<li className='nav-item'>
				<a className='nav-link' href='#!' onClick={logout_user}>
					Log out
				</a>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/profile'>
					Profile
				</Link>
			</li>
		</Fragment>
	);

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Meegu
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						{isAuthenticated ? authLinks() : guestLinks()}
					</ul>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});
export default connect(mapStateToProps, null)(Navbar);
