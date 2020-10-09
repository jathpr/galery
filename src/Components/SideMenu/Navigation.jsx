import React from 'react'
import { NavItem } from './Styles'
import { Menu } from 'antd'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<NavItem to='/'>Home</NavItem>
		</Menu.Item>
		<Menu.Item>
			<NavItem to='/login'>Login</NavItem>
		</Menu.Item>
		<Menu.Item>
			<NavItem to='/register'>Register</NavItem>
		</Menu.Item>
		<Menu.Item>
			<NavItem to='/profile'>Profile</NavItem>
		</Menu.Item>
	</Menu>
)
