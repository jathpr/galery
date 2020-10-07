import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RootRouter } from './rootrouter'
import { store } from './store'
import { Provider } from 'react-redux'

export const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<RootRouter />
		</Provider>
	</BrowserRouter>
)
