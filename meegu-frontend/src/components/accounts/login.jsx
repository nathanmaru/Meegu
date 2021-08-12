import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, checkAuth, load_user } from '../../store/authSlice';
import withSocialAuth from '../hocs/withSocialAuth';
import axios from 'axios';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		//login

		dispatch(login(email, password));
		dispatch(checkAuth());
		dispatch(load_user());
		return <Redirect to='/newsfeed' />;
	};

	const google = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(
				'http://localhost:8000/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/google'
			);

			window.location.replace(res.data.authorization_url);
		} catch (err) {}
	};

	return (
		<div className='container mt-5'>
			<h1>Sign In</h1>
			<p>Sign into your Account</p>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						className='form-control'
						placeholder='Email'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						className='form-control'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
						minLength='6'
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary mt-3'>
					Login
				</button>
			</form>
			<button className='btn btn-danger mt-3' onClick={google}>
				Continue With Google
			</button>

			<p className='mt-3'>
				Don't have an account? <Link to='/signup'>Sign Up</Link>
			</p>
			<p className='mt-3'>
				Forget your Password? <Link to='/reset-password'>Reset Password</Link>
			</p>
		</div>
	);
};

export default Login;
