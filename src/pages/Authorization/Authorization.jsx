import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.css'
import { Link } from 'react-router-dom'

export const AuthorizationComponent = ({ authUserThunk }) => {
	const onFinish = async (values) => {
		console.log('Received values of form: ', values)
		authUserThunk(values.username, values.password)
	}

	return (
		<>
			<div>
				<h1>Authorization</h1>
			</div>
			<Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
				<Form.Item
					className={'form'}
					name='username'
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}>
					<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
				</Form.Item>
				<Form.Item
					className={'form'}
					name='password'
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}>
					<Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit' className='login-form-button'>
						Log in
					</Button>
					Or <Link to='/register'>register now!</Link>
				</Form.Item>
			</Form>
		</>
	)
}
