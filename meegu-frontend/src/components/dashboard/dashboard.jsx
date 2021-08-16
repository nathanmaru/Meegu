import DashBoardNav from './dashboardNav';
import { Route } from 'react-router';
import UserProfile from '../profile/profile';
import ProjectManager from '../project/projectmanager';
const Dashboard = () => {
	return (
		<div>
			<DashBoardNav />
			<Route exact path='/profile' component={UserProfile} />
			<Route exact path='/projects' component={ProjectManager} />
		</div>
	);
};

export default Dashboard;
