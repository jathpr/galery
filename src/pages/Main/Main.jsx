import React from 'react'
import { HeaderLogo } from '../../components/Header'
import { connect } from 'react-redux'
import { SideMenu } from '../../components/SideMenu'
import { Content } from '../../components/Content'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { Profile } from '../../components/Profile'
import { CustomHeader } from './style'
const { Sider, Content: AntdContent } = Layout

const MainComponent = ({ user }) => (
	<Layout>
		<CustomHeader>
			<HeaderLogo />
		</CustomHeader>
		<Layout>
			<AntdContent>
				<Switch>
					<Route path='/profile' component={Profile} />
					<Content />
				</Switch>
			</AntdContent>
		</Layout>
	</Layout>
)
const mapStateToProps = (state) => ({
	user: state.reducer.user,
})

export const Main = connect(mapStateToProps)(MainComponent)
