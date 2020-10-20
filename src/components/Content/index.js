import { connect } from 'react-redux'
import { getPhotoThunk } from '../../store/actionCreators'
import { ContentComponent } from './Content'

const actionCreators = { getPhotoData: getPhotoThunk }

const mapStateToProps = (state) => ({ photoData: state.reducer.photoData })

export const Content = connect(mapStateToProps, actionCreators)(ContentComponent)
