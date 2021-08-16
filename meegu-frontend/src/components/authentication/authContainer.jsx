import { Route } from 'react-router-dom';
import Login from './login';
import Activate from './activate';
import ResetPassword from './resetPassword';
import ResetPasswordConfirm from './resetPasswordConfirm';
import SignUp from './signup';

const AuthContainer = () => {
	return (
		<div className='container'>
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/activate/:uid/:token' component={Activate} />
			<Route exact path='/reset-password' component={ResetPassword} />
			<Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
		</div>
	);
};

export default AuthContainer;
