import React, { useReducer } from 'react'
import { Login } from './pages/Login'
import { Photo } from './pages/Photo'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './rootrouter/AppRouter'

export const App = () => (
	<BrowserRouter>
		<AppRouter />
		<Photo />
	</BrowserRouter>
)
