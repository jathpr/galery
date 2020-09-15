import React from 'react'
import { Upload, message, Form, Input, Button, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
}

export const Demo = () => {
	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log(values)
	}

	const onReset = () => {
		form.resetFields()
	}
	const props = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList)
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} file uploaded successfully`)
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`)
			}
		},
	}

	return (
		<Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
			<Form.Item name='note' label='Description' rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name='file' label='Download image' rules={[{ required: true }]}>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</Form.Item>
			<Form.Item {...props}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
				<Button htmlType='button' onClick={onReset}>
					Reset
				</Button>
			</Form.Item>
		</Form>
	)
}
