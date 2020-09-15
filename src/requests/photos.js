import { API_URL } from './'

const photoUrl = `${API_URL}/photo`

export const getPhotos = async ({ userId } = {}) => {
	const url = new URL(photoUrl)
	userId && url.searchParams.set('userId', userId)

	const response = await fetch(url)
	const photos = await response.json()

	return photos
}

export const sendPhoto = async (photo) => {
	const url = new URL(photoUrl)

	const options = {
		method: 'POST',
		body: JSON.stringify(photo),
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const response = await fetch(url, options)
	const newPhoto = await response.json()

	return newPhoto
}
