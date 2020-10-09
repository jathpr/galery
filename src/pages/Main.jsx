import React from 'react'
import { HeaderLogo } from '../Components/Header'
import { connect } from 'react-redux'
import { SideMenu } from '../Components/SideMenu'

const MainComponent = ({ user }) => (
	<div>
		<HeaderLogo />
		<SideMenu />
	</div>
)
const mapStateToProps = (state) => ({
	user: state.reducer.user,
})

export const Main = connect(mapStateToProps)(MainComponent)
