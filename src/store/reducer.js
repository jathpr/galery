import { SET_USER, SET_USER_DATA, SET_PHOTO_DATA } from './actionTypes'

const initialState = {
	user: null,
	isShowAll: true,
	userData: {},
	photoData: [],
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.user }
		case SET_USER_DATA:
			return { ...state, userData: action.userData }
		case SET_PHOTO_DATA:
			return { ...state, photoData: action.photoData }
		default:
			return state
	}
}
