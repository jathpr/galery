import { connect } from 'react-redux'
import { AppRouter } from './AppRouter'
import { setUser, getUserDataThunk } from '../store/actionCreators'

const mapStateToProps = (state) => ({ isAuth: !!state.reducer.user })

const actionCreator = {
	setUser,
	getUserDataThunk,
}

export const RootRouter = connect(mapStateToProps, actionCreator)(AppRouter)
