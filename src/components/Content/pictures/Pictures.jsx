import React from 'react'
import s from './Pictures.module.css'
import 'antd/dist/antd.css'

export const Pictures = (props) => {
	const pic = props.obj

	return (
		<li className={s.li}>
			<img src={pic.url} alt='Error' className={s.img} />
			<div>{pic.about}</div>
		</li>
	)
}
