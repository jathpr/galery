import { UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, PageHeader } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../../firebase'
import { MenuButton } from './styles'

export const HeaderComponent = ({ isShowAll, user, getMyPhoto }) => {
	const extra = []
	const menu = (
		<Menu className='bcg'>
			<Menu.Item>
				<a target='_blank' onClick={() => getMyPhoto()}>
					{isShowAll ? 'показать только мои' : 'показать все фото'}
				</a>
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
		extra.push(
			<Button>
				<Link to='/login'>Log In</Link>
			</Button>,
		)
	}

	return (
		<>
			<PageHeader title={<Link to='/'>Galerы</Link>} ghost={false} extra={extra} />
		</>
	)
}
