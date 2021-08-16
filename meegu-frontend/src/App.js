import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import Activate from './components/accounts/activate';
import Homepage from './components/accounts/homePage';
import Login from './components/accounts/login';
import SignUp from './components/accounts/signup';
import Layout from './components/hocs/layout';
import ResetPassword from './components/accounts/resetPassword';
import ResetPasswordConfirm from './components/accounts/resetPasswordConfirm';
import UserProfile from './components/accounts/profile';
import ProjectManager from './components/project/projectmanager';
import NewsFeed from './components/newsfeed';
import store from './store/configureStore';
import ProtectedRoute from './components/common/protectedRoute';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='container py-4'>
					<Layout />
					<Switch>
						<Route exact path='/' component={Homepage} />
						<ProtectedRoute exact path='/newsfeed' component={NewsFeed} />
						<ProtectedRoute exact path='/profile' component={UserProfile} />
						<Route exact path='/projectmanager' component={ProjectManager} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={SignUp} />
						<Route exact path='/signup' component={SignUp} />
						<Route exact path='/activate/:uid/:token' component={Activate} />
						<Route exact path='/reset-password' component={ResetPassword} />
						<Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
