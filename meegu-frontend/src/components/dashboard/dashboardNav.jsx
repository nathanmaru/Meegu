import { Link } from 'react-router-dom';
const DashBoardNav = () => {
	return (
		<ul>
			<li>
				<Link to='/dashboard'>Dashboard</Link>
			</li>
			<li>
				<Link to='/profile'>Profile</Link>
			</li>
			<li>
				<Link to='/projects'>Projects</Link>
			</li>
		</ul>
	);
};

export default DashBoardNav;
