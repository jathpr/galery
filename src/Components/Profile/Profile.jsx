import React, { useEffect } from 'react'

export const ProfileComponent = (props) => {
	// fetch('https://my-json-server.typicode.com/jathpr/galery/about/0')
	// useEffect(() => {
	// 	props.getUserData()
	// }, [])
	const userData = props.userData

	return (
		<div>
			<div>Name {userData.name}</div>
			<div>surname {userData.surname}</div>
			<div>phone {userData.phone}</div>
			<div>email {userData.email}</div>
			<div>about {userData.about}</div>
		</div>
	)
}
