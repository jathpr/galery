import React, { useCallback, useContext } from 'react'
import { getPhotos } from '../requests/photos'
import { authUser } from '../requests/user'
import { DispatchContext, StateContext } from '../store'

export const Login = () => {
	const state = useContext(StateContext)
	const dispatch = useContext(DispatchContext)

	const handleAuth = useCallback(async () => {
		const users = await authUser({ login: 'Wantuz', pass: 'passThisOn' })
		if (users.length > 0) {
			dispatch({ type: 'SET_USER', user: users[0] })
		}
	}, [dispatch])

	return (
		<div>
			{state.user && `login ${state.user.login}`}
			<button onClick={handleAuth}>auth</button>
			<button onClick={() => getPhotos({ userId: 0 })}>getPhoto</button>
		</div>
	)
}
