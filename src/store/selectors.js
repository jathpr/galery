import { createSelector } from 'reselect'

const photoDataSelector = (state) => state.reducer.photoData
const isShowAllSelector = (state) => state.reducer.isShowAll
const userDataIDSelector = (state) => state.reducer.userData.id

export const getPhotosSelector = createSelector(
	photoDataSelector,
	isShowAllSelector,
	userDataIDSelector,
	(photoData, isshowAll, userid) => {
		console.log('inside function')

		return isshowAll ? photoData : photoData && photoData.filter((user) => user.id === userid)
	},
)
