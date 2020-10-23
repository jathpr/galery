import { initializeApp, auth, firestore, storage as fbStorage } from 'firebase'

initializeApp(JSON.parse(process.env.REACT_APP_TEST))
const currentAuth = auth()
const db = firestore()
const storage = fbStorage()

const USERS = 'users'
const IMAGES = 'images'
const PHOTOS = 'photos'

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

export const addUser = async (user) => {
	const newUser = await db.collection(USERS).add(user)
	console.log('getUser -> doc', newUser)
}

export const getUser = async () => {
	const users = await db.collection(USERS).get()
	users.forEach((doc) => {
		console.log('getUser -> doc', doc.id, doc.data())
	})
}

export const addImage = async (imageName, image) => {
	const storageRef = storage.ref()
	const newImgRef = storageRef.child(`${IMAGES}/${imageName}.jpg`)
	await newImgRef.put(image)
}
export const addPhoto = async ({ alt, url }) => {
	const newPhoto = await db.collection(PHOTOS).add({ alt, url })
	const myPhoto = await db.collection(PHOTOS).doc(newPhoto.id).get()
	console.log(myPhoto)
}
export const getPhotos = async () => {
	const photos = await db.collection(PHOTOS).get()

	const photosAll = []
	photos.forEach((doc) => photosAll.push({ ...doc.data(), id: doc.id }))
	console.log(photosAll)

	return photosAll
}
export const getImage = async (imageName) => {
	const storageRef = storage.ref(IMAGES)
	const url = await storageRef.child(`${imageName}.jpg`).getDownloadURL()

	const image = await fetch(url)
	const blobImage = await image.blob()

	return blobImage
}
