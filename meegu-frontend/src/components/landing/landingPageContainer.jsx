import LandingPage from './landingPage';
import { Route } from 'react-router-dom';

const LandingPageContainer = () => {
	return (
		<div className='container'>
			<div>Hello</div>
			<Route exact path='/' component={LandingPage} />
		</div>
	);
};

export default LandingPageContainer;
