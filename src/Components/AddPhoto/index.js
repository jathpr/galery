import { connect } from 'react-redux'
import { addPhotoThunk } from '../../store/actionCreators'
import { AddPhotoComponent } from './AddPhoto'

const actionCreators = { addPhoto: addPhotoThunk }

export const AddPhoto = connect(null, actionCreators)(AddPhotoComponent)
