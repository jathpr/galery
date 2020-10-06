import { initializeApp, auth } from 'firebase'

initializeApp(process.env.REACT_APP_TEST)

export const fbauth = auth
