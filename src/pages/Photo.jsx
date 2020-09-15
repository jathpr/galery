import React, { useState } from 'react'
import { sendPhoto } from '../requests/photos'

export const Photo = () => {
	const [image, setImg] = useState()

	const encodeImageFileAsURL = (event) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onloadend = () => {
			setImg(reader.result)
			sendPhoto({ about: 'test', userId: 0, image: reader.result })
		}
		reader.readAsDataURL(file)
	}

	return (
		<div>
			<img src={image} />
			<input type='file' onChange={encodeImageFileAsURL} />
		</div>
	)
}
