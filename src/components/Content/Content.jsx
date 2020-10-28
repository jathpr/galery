import React, { useEffect } from 'react'
import { Pictures } from './pictures/Pictures'
import s from './Content.module.css'
import { Modal } from '../Modal'
import { Carousel } from 'antd'

export const ContentComponent = ({ photoData, getPhotoData, user }) => {
	useEffect(() => {
		getPhotoData()
	}, [])

	return (
		<div className={s.pictures_block}>
			{user && <Modal uid={user.uid} />}

			<Carousel autoplay>{photoData && photoData.map((pic) => <Pictures key={pic.id} obj={pic} />)}</Carousel>
		</div>
	)
}
