import { SET_USER } from './actionTypes'
import { authUser } from '../requests/user'

export const setUser = (user) => ({
	type: SET_USER,
	user,
})

export const authUserThunk = (login, pass) => async (dispatch) => {
	const users = await authUser({ login: login, pass: pass })
	if (users.length > 0) {
		dispatch(setUser(users[0]))
	}
}
