import { setUser } from '../../store/actionCreators'
import { connect } from 'react-redux'
import { HeaderComponent } from './Header'

const actionCreator = {
	setUser,
}

export const HeaderLogo = connect(null, actionCreator)(HeaderComponent)
