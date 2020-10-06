import { SET_USER } from './actionTypes'
import { authUser } from '../requests/user'
import { loginUser, registerUser } from '../firebase'

export const setUser = (user) => ({
	type: SET_USER,
	user,
})

export const authUserThunk = (login, pass) => async (dispatch) => {
	const responce = await loginUser(login, pass)
	console.log(responce)
	//	responce.json
}
export const registerUserThunk = (login, pass) => async (dispatch) => {
	const responce = await registerUser(login, pass)
	console.log(responce)
	//	responce.json
}
