import React from 'react'
import { HeaderLogo } from '../components/Header'
import { connect } from 'react-redux'

const MainComponent = ({ user }) => (
	<div>
		<HeaderLogo />
		Main {user}
	</div>
)
const mapStateToProps = (state) => ({
	user: state.reducer.user,
})

export const Main = connect(mapStateToProps)(MainComponent)
