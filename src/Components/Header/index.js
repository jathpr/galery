import { setUser, getMyPhoto } from '../../store/actionCreators'
import { connect } from 'react-redux'
import { HeaderComponent } from './Header'

const mapStateToProps = (state) => ({
	user: state.reducer.user,
	userData: state.reducer.userData,
})
const actionCreator = {
	setUser,
	getMyPhoto,
}

export const HeaderLogo = connect(mapStateToProps, actionCreator)(HeaderComponent)
