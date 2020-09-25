import React, { useReducer } from 'react'
//import { Login } from './pages/Login'
import { Photo } from './pages/Photo'
import { DispatchContext, StateContext } from './store'
import { initialState, reducer } from './store/reducer'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './rootrouter/AppRouter'

export const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<BrowserRouter>
			<StateContext.Provider value={state}>
				<DispatchContext.Provider value={dispatch}>
					<AppRouter />

					<Photo />
				</DispatchContext.Provider>
			</StateContext.Provider>
		</BrowserRouter>
	)
}
