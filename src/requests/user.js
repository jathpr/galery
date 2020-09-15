import { API_URL } from './'

const usersUrl = `${API_URL}/users`

export const authUser = async ({ login, pass }) => {
	const url = new URL(usersUrl)
	url.searchParams.set('login', login)
	url.searchParams.set('pass', pass)

	const response = await fetch(url)
	const users = await response.json()

	return users
}
