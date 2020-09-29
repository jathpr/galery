import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './rootrouter/AppRouter'
import { store } from './store'
import { Provider } from 'react-redux'

export const App = () => (
	<BrowserRouter>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</BrowserRouter>
)
