import React, { useReducer } from 'react'
import { Login } from './pages/Login'
import { Photo } from './pages/Photo'
import { DispatchContext, StateContext } from './store'
import { initialState, reducer } from './store/reducer'

export const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<Login />
				<Photo />
			</DispatchContext.Provider>
		</StateContext.Provider>
	)
}
