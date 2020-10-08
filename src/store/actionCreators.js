import { SET_USER } from './actionTypes'
import { loginUser, registerUser } from '../firebase'

export const setUser = (user) => ({
	type: SET_USER,
	user,
})

export const authUserThunk = (login, pass) => async (dispatch) => {
	const responce = await loginUser(login, pass)
	console.log(responce)
}
export const registerUserThunk = (login, pass) => async (dispatch) => {
	const responce = await registerUser(login, pass)
	console.log(responce)
}
