import { SET_USER, SET_USER_DATA, SET_PHOTO_DATA, SHOW_ONLY_MY_PHOTO } from './actionTypes'

const initialState = {
	user: null,
	isShowAll: true,
	userData: {},
	photoData: [],
	// myPhoto: false,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.user }
		case SET_USER_DATA:
			return { ...state, userData: action.userData }
		case SET_PHOTO_DATA:
			return { ...state, photoData: action.photoData }
		case SHOW_ONLY_MY_PHOTO:
			return { ...state, photoData: state.photoData.filter((user) => user.id === state.userData.id) }
		default:
			return state
	}
}
