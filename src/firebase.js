import { initializeApp, auth } from 'firebase'

initializeApp(JSON.parse(process.env.REACT_APP_TEST))
const currentAuth = auth()

const handleError = (callback, params) => {
	try {
		callback()
	} catch (error) {
		console.log('hendleError -> error', error)
		console.log('hendleError -> error', error.code)
	}
}

export function loginUser(email, password) {
	return currentAuth.signInWithEmailAndPassword(email, password)
}

export function registerUser(email, password) {
	return currentAuth.createUserWithEmailAndPassword(email, password)
}

export function initAuth(callback) {
	currentAuth.onAuthStateChanged(callback)
}

export function signOut() {
	currentAuth.signOut()
}
