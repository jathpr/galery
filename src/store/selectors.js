import { createSelector } from 'reselect'

const photoDataSelector = (state) => state.reducer.photoData
const isShowAllSelector = (state) => state.reducer.isShowAll
const userDataIDSelector = (state) => state.reducer.user && state.reducer.user.uid

export const getPhotosSelector = createSelector(
	photoDataSelector,
	isShowAllSelector,
	userDataIDSelector,
	(photoData, isshowAll, userid) =>
		isshowAll ? photoData : photoData && photoData.filter((photo) => photo.userId === userid),
)
