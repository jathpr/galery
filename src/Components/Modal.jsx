import React from 'react'
import { Demo } from './Form'
import { Modal, Button } from 'antd'

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
				<Button type='primary' onClick={this.showModal}>
					Open Modal
				</Button>
				<Modal
					destroyOnClose
					title='Basic Modal'
					footer={null}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<Demo close={this.handleCancel} />
				</Modal>
			</>
		)
	}
}

export default App
