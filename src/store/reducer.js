import { SET_USER, SET_USER_DATA, SET_PHOTO_DATA, SHOW_ONLY_MY_PHOTO, ADD_PHOTO } from './actionTypes'

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
		case ADD_PHOTO:
			return { ...state, photoData: [...state.photoData, action.photo] }
		case SHOW_ONLY_MY_PHOTO:
			return { ...state, isShowAll: !state.isShowAll }
		default:
			return state
	}
}
