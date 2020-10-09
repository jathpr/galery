import React from 'react'
import { NavItem } from './Styles'

export const Navigation = () => (
	<nav>
		<ul>
			<li>
				<NavItem to='/'>Home</NavItem>
			</li>
			<li>
				<NavItem to='/login'>Login</NavItem>
			</li>
			<li>
				<NavItem to='/register'>Register</NavItem>
			</li>
			<li>
				<NavItem to='/profile'>Profile</NavItem>
			</li>
		</ul>
	</nav>
)
