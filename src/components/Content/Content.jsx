import React, { useState, useEffect } from 'react'
import { Pictures } from './pictures/Pictures'
import s from './Content.module.css'
import Modal from '../Modal'

export const ContentComponent = ({ photoData, getPhotoData }) => {
	useEffect(() => {
		getPhotoData()
	}, [])

	return (
		<div className={s.pictures_block}>
			<Modal />

			<ul>{photoData && photoData.map((pic) => <Pictures key={pic.id} obj={pic} />)}</ul>
			<div className={s.pag}>
				{/* <Pagination onChange={changePag} defaultCurrent={1} total={pictures.length} defaultPageSize={1} /> */}
			</div>
		</div>
	)
}
