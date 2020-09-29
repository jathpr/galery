import { authUserThunk } from '../../store/actionCreators'
import { connect } from 'react-redux'
import { AuthorizationComponent } from './Authorization'

const actionCreator = {
	authUserThunk,
}

export const Authorization = connect(null, actionCreator)(AuthorizationComponent)
