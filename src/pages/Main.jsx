import React from 'react'
import { HeaderLogo } from '../components/Header'
import { connect } from 'react-redux'
import { SideMenu } from '../components/SideMenu'
import { Content } from '../components/Content'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
const { Header, Sider, Content: AntdContent } = Layout

const MainComponent = ({ user }) => (
	<Layout>
		<Header>
			<HeaderLogo />
		</Header>
		<Layout>
			<Sider>
				<SideMenu />
			</Sider>
			<AntdContent>
				<Switch>
					<Route path='/profile' component={() => 'profile'} />
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
