import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { activateAccount } from '../../store/authSlice';

const Activate = ({ match }) => {
	const [verified, setVerified] = useState(false);

	const verify_account = (e) => {
		const uid = match.params.uid;
		const token = match.params.token;
		activateAccount(uid, token);
		setVerified(true);
	};

	if (verified) {
		return <Redirect to='/'></Redirect>;
	}

	return (
		<div className='container mt-5'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h1>Verify Your Account</h1>
				<button onClick={verify_account} className='btn btn-primary'>
					Verify
				</button>
			</div>
		</div>
	);
};

export default Activate;
