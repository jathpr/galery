import { setUser } from '../../store/actionCreators'
import { connect } from 'react-redux'
import { HeaderComponent } from './Header'
const mapStateToProps = (state) => ({
	user: state.reducer.user,
})
const actionCreator = {
	setUser,
}

export const HeaderLogo = connect(mapStateToProps, actionCreator)(HeaderComponent)
