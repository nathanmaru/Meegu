import { useLocation, Switch } from 'react-router-dom';
import Layout from './components/hocs/layout';
import LandingPageContainer from './components/landing/landingPageContainer';
import AuthContainer from './components/authentication/authContainer';
import Navbar from './components/common/navbar';
import Dashboard from './components/dashboard/dashboard';

const App = () => {
	const { pathname } = useLocation();
	return (
		<div className='container'>
			{pathname === '/' && <Navbar />}
			{/* Put another navbar for main app */}
			<Switch>
				<div className='py-4'>
					<Layout />
					<LandingPageContainer />
					<AuthContainer />
					{pathname !== '/' || (!pathname.includes('/auth/') && <Dashboard />)}
				</div>
			</Switch>
		</div>
	);
};

export default App;
