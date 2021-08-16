import { Route } from 'react-router-dom';
import Login from './login';
import Activate from './activate';
import ResetPassword from './resetPassword';
import ResetPasswordConfirm from './resetPasswordConfirm';
import SignUp from './signup';

const AuthContainer = () => {
	return (
		<div className='container'>
			<Route exact path='/auth/login' component={Login} />
			<Route exact path='/auth/signup' component={SignUp} />
			<Route exact path='/auth/activate/:uid/:token' component={Activate} />
			<Route exact path='/auth/reset-password' component={ResetPassword} />
			<Route exact path='/auth/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
		</div>
	);
};

export default AuthContainer;
