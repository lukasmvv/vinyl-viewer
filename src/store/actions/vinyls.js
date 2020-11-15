import * as actionTypes from './actionTypes';

export const removeActiveVinyl = () => {
	return {
		type: actionTypes.REMOVE_ACTIVE_VINYL
	};
};

export const setActiveVinyl = (vinylObj) => {
	return {
		type: actionTypes.SET_ACTIVE_VINYL,
		vinyl: vinylObj
	};
};