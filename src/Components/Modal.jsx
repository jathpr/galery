import React from 'react'
import { AddPhoto } from './AddPhoto'
import { Modal as ModalAntd, Button } from 'antd'
import './Modal.css'

export class Modal extends React.Component {
	state = { visible: false }

	showModal = () => {
		this.setState({
			visible: true,
		})
	}

	handleCancel = (e) => {
		console.log(e)
		this.setState({
			visible: false,
		})
	}

	render() {
		return (
			<>
				<Button className={'add-image-btn'} type='primary' onClick={this.showModal}>
					<span>+</span>
				</Button>
				<ModalAntd
					destroyOnClose
					title='Basic Modal'
					footer={null}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<AddPhoto close={this.handleCancel} uid={this.props.uid} />
				</ModalAntd>
			</>
		)
	}
}
