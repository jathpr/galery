import React, { useReducer } from 'react'
import { DispatchContext, StateContext } from './store'
import { initialState, reducer } from './store/reducer'
import { Authorization } from './pages/Authorization'
import { Registration } from './pages/Registration'

export const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<Authorization />
				<Registration />
			</DispatchContext.Provider>
		</StateContext.Provider>
	)
}
