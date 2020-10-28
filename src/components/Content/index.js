import { connect } from 'react-redux'
import { getPhotoThunk } from '../../store/actionCreators'
import { getPhotosSelector } from '../../store/selectors'
import { ContentComponent } from './Content'

const actionCreators = { getPhotoData: getPhotoThunk }

const mapStateToProps = (state) => ({ user: state.reducer.user, photoData: getPhotosSelector(state) })

export const Content = connect(mapStateToProps, actionCreators)(ContentComponent)
