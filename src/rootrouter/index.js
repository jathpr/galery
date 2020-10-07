import { connect } from 'react-redux'
import { AppRouter } from './AppRouter'
import { setUser } from '../store/actionCreators'

const mapStateToProps = (state) => ({ isAuth: !!state.reducer.user })

const actionCreator = {
	setUser,
}

export const RootRouter = connect(mapStateToProps, actionCreator)(AppRouter)
