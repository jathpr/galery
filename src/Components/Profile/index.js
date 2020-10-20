import { ProfileComponent } from './Profile'
import { connect } from 'react-redux'
// import { getUserDataThunk } from '../../store/actionCreators'

const actionCreators = {}

const mapStateToProps = (state) => ({})

export const Profile = connect(mapStateToProps, actionCreators)(ProfileComponent)
