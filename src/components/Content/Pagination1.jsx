import React from 'react'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import './Pagination.css'

export const Pagination1 = (props) => {
	const total = props.total

	return (
		<div>
			<Pagination defaultCurrent={1} total={total} />
		</div>
	)
}
