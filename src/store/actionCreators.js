import { SET_USER, SET_USER_DATA, SET_PHOTO_DATA } from './actionTypes'
import { loginUser, registerUser } from '../firebase'

export const setUser = (user) => ({
	type: SET_USER,
	user,
})
export const getPhotoThunk = () => async (dispatch) => {
	const responce = await fetch('https://my-json-server.typicode.com/jathpr/galery/photo')
	const photoData = await responce.json()
	dispatch({ type: SET_PHOTO_DATA, photoData })
}
export const authUserThunk = (login, pass) => async (dispatch) => {
	const responce = await loginUser(login, pass)
	console.log(responce)
}
export const registerUserThunk = (login, pass) => async (dispatch) => {
	const responce = await registerUser(login, pass)
	console.log(responce)
}
export const getUserDataThunk = () => async (dispatch) => {
	const responce = await fetch('https://my-json-server.typicode.com/jathpr/galery/about/0')
	const userData = await responce.json()
	dispatch({ type: SET_USER_DATA, userData })
}
