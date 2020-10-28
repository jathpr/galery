import React from 'react'
import 'antd/dist/antd.css'

export const Pictures = (props) => {
	const pic = props.obj

	return (
		<div>
			<img src={pic.url} alt='Error' style={{ width: '70vw' }} />
			<div>{pic.about}</div>
		</div>
	)
}
