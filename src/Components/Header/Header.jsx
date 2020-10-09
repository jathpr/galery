import React from 'react'
import { Button, PageHeader, Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import { signOut } from '../../firebase'
import { MenuButton } from './styles'
import { Link } from 'react-router-dom'

export const HeaderComponent = ({ user, setUser }) => {
	const extra = []
	const menu = (
		<Menu className='bcg'>
			<Menu.Item>
				<a target='_blank'>показать только мои</a>
			</Menu.Item>
			<Menu.Item>
				<Link to='/profile'>профиль</Link>
			</Menu.Item>
			<Menu.Item>
				<MenuButton as='a' onClick={signOut}>
					выйти
				</MenuButton>
			</Menu.Item>
		</Menu>
	)
	if (user) {
		extra.push(
			<Dropdown overlay={menu} placement='bottomLeft' arrow>
				<Avatar
					src='https://st3.depositphotos.com/6707292/16849/i/450/depositphotos_168495402-stock-photo-colorful-peruh-symbol-year-eastern.jpg'
					size={90}
					icon={<UserOutlined />}
				/>
			</Dropdown>,
		)
	} else {
		extra.push(<Button>Войти</Button>)
	}

	return (
		<>
			<PageHeader className='site-page-header' title='Заголовок' extra={extra} />
		</>
	)
}
