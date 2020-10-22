import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Authorization } from '../pages/Authorization'
import { Registration } from '../pages/Registration'
import { Main } from '../pages/Main'
import { initAuth } from '../firebase'

export const AppRouter = ({ isAuth, setUser, getUserDataThunk }) => {
	const history = useHistory()
	useEffect(() => {
		getUserDataThunk()
		initAuth((user) => {
			setUser(user)
			user ? history.push('/') : history.push('/login')
		})
	}, [])

	return (
		<Switch>
			<Route path='/login' component={Authorization} />
			<Route path='/register' component={Registration} />
			{/* {!isAuth && <Redirect to='/login' />} */}
			<Route path='/' component={Main} />
		</Switch>
	)
}
