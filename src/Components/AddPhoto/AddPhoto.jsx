import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
}

export const AddPhotoComponent = ({ close, addPhoto, uid }) => {
	const [form] = Form.useForm()
	const [image, setImg] = useState()
	const [file, setFile] = useState()

	const onImageSelected = (e) => {
		const file = e.target.files[0]
		setFile(file)
		const reader = new FileReader()
		reader.onloadend = function () {
			setImg(reader.result)
		}
		reader.readAsDataURL(file)
	}
	const onFinish = (values) => {
		addPhoto({ about: values.note, userId: uid, photo: file })
	}
	const onReset = () => {
		form.resetFields()
		setImg()
	}

	return (
		<Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
			<Form.Item name='note' label='Description' rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name='file' label='Download image' rules={[{ required: false }]}>
				<div>
					{image && <img src={image} alt='pic' />}
					<input type='file' onChange={onImageSelected} />
				</div>
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Button type='primary' htmlType='submit' onClick={close}>
					Submit
				</Button>
				<Button htmlType='button' onClick={onReset}>
					Reset
				</Button>
			</Form.Item>
		</Form>
	)
}
