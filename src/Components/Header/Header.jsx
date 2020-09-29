import React from 'react'
import { Button, PageHeader, Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'

export const HeaderComponent = ({ user, setUser }) => {
	const extra = []
	const menu = (
		<Menu className='bcg'>
			<Menu.Item>
				<a target='_blank'>показать только мои</a>
			</Menu.Item>
			<Menu.Item>
				<a target='_blank'>профиль</a>
			</Menu.Item>
			<Menu.Item>
				<a target='_blank'>выйти</a>
			</Menu.Item>
		</Menu>
	)
	if (user) {
		extra.push(
			<Dropdown overlay={menu} placement='bottomLeft' arrow>
				<Button key='3'>Информация</Button>
			</Dropdown>,
		)
		extra.push(
			<Avatar
				src='https://st3.depositphotos.com/6707292/16849/i/450/depositphotos_168495402-stock-photo-colorful-peruh-symbol-year-eastern.jpg'
				size={90}
				icon={<UserOutlined />}
			/>,
		)
	} else {
		extra.push(<Button>Войти</Button>)
	}
	extra.push(<Button onClick={() => setUser('user')}>setUser</Button>)

	return (
		<>
			<PageHeader className='site-page-header' title='Заголовок' extra={extra} />
		</>
	)
}
