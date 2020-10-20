import { ProfileComponent } from './Profile'
import { connect } from 'react-redux'
// import { getUserDataThunk } from '../../store/actionCreators'

const actionCreators = {}

const mapStateToProps = (state) => ({ userData: state.reducer.userData })

export const Profile = connect(mapStateToProps, actionCreators)(ProfileComponent)
