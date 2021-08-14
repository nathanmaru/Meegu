import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import Activate from './components/accounts/activate';
import Homepage from './components/accounts/homePage';
import Login from './components/accounts/login';
import SignUp from './components/accounts/signup';
import Layout from './components/hocs/layout';
import NewsFeed from './components/newsfeed';
import store from './store/configureStore';
import ProtectedRoute from './components/common/protectedRoute';
import NavBar from './components/common/navbar';

import './tailwind.css';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='container py-4'>
					<Layout />
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route path='/newsfeed' component={NewsFeed} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={SignUp} />
						<Route exact path='/activate/:uid/:token' component={Activate} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
