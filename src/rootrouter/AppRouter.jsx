import React, { useEffect } from 'react'
import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom'
import { Authorization } from '../pages/Authorization'
import { Registration } from '../pages/Registration'
import { Main } from '../pages/Main'
import { initAuth } from '../firebase'

export const AppRouter = ({ isAuth, setUser }) => {
	const Profile = () => <div>profile</div>

	const history = useHistory()
	useEffect(() => {
		initAuth((user) => {
			setUser(user)
			user ? history.push('/') : history.push('/login')
		})
	}, [])

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
				<Route path='/login' component={Authorization} />
				<Route path='/register' component={Registration} />
				{/* {!isAuth && <Redirect to='/login' />} */}
				<Route exact path='/' component={Main} />
				<Route path='/profile' component={Profile} />
			</Switch>
		</>
	)
}
