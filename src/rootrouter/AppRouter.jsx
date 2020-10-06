import React, {useEffect} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Authorization } from '../pages/Authorization'
import { Main } from '../pages/Main'
import {initAuth} from "../firebase";

export const AppRouter = () => {
	const Register = () => <div>register</div>

	const Profile = () => <div>profile</div>

	useEffect(()=> {initAuth((user)=>console.log(user))}, [])

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
				<Route exact path='/' component={Main} />
				<Route path='/login' component={Authorization} />
				<Route path='/register' component={Register} />
				<Route path='/profile' component={Profile} />
			</Switch>
		</>
	)
}
