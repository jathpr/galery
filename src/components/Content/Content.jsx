import React, { useState, useEffect } from 'react'
import { Pictures } from './pictures/Pictures'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import s from './Content.module.css'

export const Content = () => {
	const [pictures, setPictures] = useState([])
	const [pictures1, setPictures1] = useState([])

	useEffect(() => {
		getInfo()
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

	return (
		<div className={s.div}>
			<ul>
				{pictures1.map((pic) => (
					<Pictures key={pic.id} obj={pic} />
				))}
			</ul>
			<div className={s.pag}>
				<Pagination onChange={changePag} defaultCurrent={1} total={pictures.length} defaultPageSize={1} />
			</div>
		</div>
	)
}
