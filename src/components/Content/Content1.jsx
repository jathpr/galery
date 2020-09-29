import React, { useState, useEffect } from 'react'
import { Pictures } from './pictures/Pictures'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import s from './Content.module.css'

export const Content = () => {
	const [pictures, setPictures] = useState([])
	const [size, setSize] = useState(pictures.lenght)

	useEffect(() => {
		changePag()
	}, [])

	const getInfo = async (page, pageSize) => {
		const page1 = page
		const limit1 = pageSize
		const connect = 'http://localhost:3004/photo?_page=' + page1 + '&_limit=' + limit1
		const infoResp = await fetch(connect)
		const info = await infoResp.json()
		console.log(info)
		setPictures(info)
	}

	const changePag = (page, pageSize) => {
		const page1 = page
		const pageSize1 = pageSize
		getInfo(page1, pageSize1)
		console.log(page1)
	}

	return (
		<div className={s.div}>
			<ul>
				{pictures.map((pic) => (
					<Pictures key={pic.id} obj={pic} />
				))}
			</ul>
			{/* <Pagination1 total={pictures.length}/> */}
			<Pagination onChange={changePag} defaultCurrent={1} total={size} defaultPageSize={1} />
		</div>
	)
}
