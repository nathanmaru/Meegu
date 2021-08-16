import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../../store/authSlice';

const SignUp = () => {
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		re_password: '',
	});
	const { email, password, re_password, first_name, last_name } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const dispatch = useDispatch();
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(signup(first_name, last_name, email, password, re_password));
	};
	//if (!isAuthenticated) return <Redirect to='/'></Redirect>;
	return (
		<div className='container mt-5'>
			<h1>Sign In</h1>
			<p>Sign into your Account</p>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='text'
						className='form-control'
						placeholder='First Name*'
						name='first_name'
						value={first_name}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Last Name*'
						name='last_name'
						value={last_name}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='email'
						className='form-control'
						placeholder='Email*'
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
						placeholder='Password*'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
						minLength='6'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						className='form-control'
						placeholder='Confirm Password*'
						name='re_password'
						value={re_password}
						onChange={(e) => onChange(e)}
						minLength='6'
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary mt-3'>
					SignUp
				</button>
			</form>

			<p className='mt-3'>
				Already an account? <Link to='/login'>Log in</Link>
			</p>
		</div>
	);
};

export default SignUp;
