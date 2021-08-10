import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { reset_password } from '../../store/authSlice';

const ResetPassword = ({ resetPassword, isAuthenticated }) => {
	const [requestSent, setRequestSent] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
	});
	const { email } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		reset_password(email);
		setRequestSent(true);
	};

	if (requestSent) {
		return <Redirect to='/'></Redirect>;
	}

	return (
		<div className='container mt-5'>
			<h1>Request Password Reset</h1>
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
				<button type='submit' className='btn btn-primary mt-3'>
					Sent Request
				</button>
			</form>
		</div>
	);
};

export default ResetPassword;
