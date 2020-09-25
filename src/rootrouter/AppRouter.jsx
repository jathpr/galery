import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Authorization } from '../pages/Authorization'

export const AppRouter = () => {
	const Home = () => <div>home</div>

	const Register = () => <div>register</div>

	const Profile = () => <div>profile</div>

	const Header = () => (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
					<li>
						<Link to='/profile'>Profile</Link>
					</li>
				</ul>
			</nav>
		</header>
	)

	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Authorization} />
				<Route path='/register' component={Register} />
				<Route path='/profile' component={Profile} />
			</Switch>
		</>
	)
}
