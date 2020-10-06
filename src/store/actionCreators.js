import { SET_USER } from './actionTypes'
import { authUser } from '../requests/user'
import {loginUser} from "../firebase";

export const setUser = (user) => ({
	type: SET_USER,
	user,
})

export const authUserThunk = (login, pass) => async (dispatch) => {
	const responce = await loginUser (login, pass)
	console.log(responce)
//	responce.json
}
