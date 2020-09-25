import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './rootrouter/AppRouter'

export const App = () => (
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>
)
