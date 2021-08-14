import { Link, Redirect } from 'react-router-dom';
// import withAuth from '../hocs/withAuth';
// import { getUser } from '../../store/authSlice';

const Homepage = () => {
	return (
		<div className='p-5 mb-4 bg-light rounded-3'>
			<div className='container-fluid py-5'>
				<p className='mb-0'>The platfrom just for you!</p>
				<h1 className='h1'>
					Easier and more meaningful
					<br /> Research Journey.
				</h1>
				<Link to='/signup'>
					<button className='btn btn-primary btn-lg' type='button'>
						Get Started!
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
