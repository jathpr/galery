import React, { useState, useEffect } from 'react'
import { Pictures } from './pictures/Pictures'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import s from './Content.module.css'
import { addImage, addUser, getImage, getUser } from '../../firebase'

export const ContentComponent = ({ photoData, getPhotoData }) => {
	const [pictures, setPictures] = useState([])
	const [pictures1, setPictures1] = useState([])

	useEffect(() => {
		getInfo()
		getPhotoData()
		changePag()
	}, [])

	const getInfo = async () => {
		const infoResp = await fetch('http://localhost:3004/photo')
		const info = await infoResp.json()
		setPictures(info)
	}

	const changePag = async (page = 1, pageSize = 1) => {
		const connect = 'http://localhost:3004/photo?_page=' + page + '&_limit=' + pageSize
		const infoResp = await fetch(connect)
		const info = await infoResp.json()
		setPictures1(info)
	}

	const onImageSelected = (e) => {
		const file = e.target.files[0]
		addImage('someImg', file)
	}

	const [image, setImage] = useState()

	return (
		<div className={s.pictures_block}>
			<button onClick={() => addUser({ name: 'name', about: 'bout' })}>add</button>
			<button onClick={() => getUser()}>get</button>
			<input type='file' onChange={onImageSelected} />
			<button onClick={async () => setImage(await getImage('someImg'))}>get Image</button>
			<img src={image && URL.createObjectURL(image)} />

			<ul>
				{photoData.map((pic) => (
					<Pictures key={pic.id} obj={pic} />
				))}
			</ul>
			<div className={s.pag}>
				<Pagination onChange={changePag} defaultCurrent={1} total={pictures.length} defaultPageSize={1} />
			</div>
		</div>
	)
}
