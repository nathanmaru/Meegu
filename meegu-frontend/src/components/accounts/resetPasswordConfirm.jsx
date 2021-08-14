import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { reset_password_confirm } from '../../store/authSlice';
import { connect } from 'react-redux';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
	const [requestSent, setRequestSent] = useState(false);
	const [formData, setFormData] = useState({
		new_password: '',
		re_new_password: '',
	});
	const { new_password, re_new_password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		const uid = match.params.uid;
		const token = match.params.token;
		console.log(uid, token, new_password, re_new_password);
		reset_password_confirm(uid, token, new_password, re_new_password);
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
						type='password'
						className='form-control'
						placeholder='New Password'
						name='new_password'
						value={new_password}
						onChange={(e) => onChange(e)}
						minLength='6'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						className='form-control'
						placeholder='Confirm New Password'
						name='re_new_password'
						value={re_new_password}
						onChange={(e) => onChange(e)}
						minLength='6'
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
