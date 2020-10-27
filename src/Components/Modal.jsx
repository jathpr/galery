import React from 'react'
import { AddPhoto } from './AddPhoto'
import { Modal, Button } from 'antd'
import './Modal.css'

class App extends React.Component {
	state = { visible: false }

	showModal = () => {
		this.setState({
			visible: true,
		})
	}

	handleOk = (e) => {
		console.log(e)
		this.setState({
			visible: false,
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
				<Modal
					destroyOnClose
					title='Basic Modal'
					footer={null}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<AddPhoto close={this.handleCancel} />
				</Modal>
			</>
		)
	}
}

export default App
