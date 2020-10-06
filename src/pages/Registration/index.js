import { registerUserThunk } from '../../store/actionCreators'
import { connect } from 'react-redux'
import { RegistrationComponent } from './Registration'

const actionCreator = {
	register: registerUserThunk,
}

export const Registration = connect(null, actionCreator)(RegistrationComponent)
