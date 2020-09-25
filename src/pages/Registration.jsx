import React from 'react'
import { Form, Input, Button } from 'antd'
import './login.css'

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
}
const tailLayout = {
	wrapperCol: {
		offset: 2,
		span: 16,
	},
}

export const Registration = () => {
	const onFinish = (values) => {
		console.log('Success:', values)
		const { confirm, ...newUser } = values
		sendData(newUser)
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	const sendData = async (values) => {
		const url = 'http://localhost:3004/users'
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const json = await response.json()

			return json
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<>
			<div>
				<h1>Registration</h1>
			</div>
			<Form
				{...layout}
				name='basic'
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}>
				<Form.Item
					className={'form'}
					label='Username'
					name='login'
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}>
					<Input />
				</Form.Item>

				<Form.Item
					className={'form'}
					label='Password'
					name='pass'
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
					hasFeedback>
					<Input.Password />
				</Form.Item>

				<Form.Item
					className={'form'}
					name='confirm'
					label='Confirm Password'
					dependencies={['pass']}
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Please confirm your password!',
						},
						({ getFieldValue }) => ({
							validator(rule, value) {
								if (!value || getFieldValue('pass') === value) {
									return Promise.resolve()
								}

								return Promise.reject('The two passwords that you entered do not match!')
							},
						}),
					]}>
					<Input.Password />
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type='primary' htmlType='submit'>
						Register
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
