import * as actionTypes from '../actions/actionTypes';

const initialState = {
    activeVinyl: null,
	vinyls: [{
        artist: 'Fokof',
        album: 'Swanesong',
        cover: 'swanesong.png',
        year: '2006',
        genre: 'rock',
        id: 1
    },{
        artist: 'Wolfmother',
        album: 'Victorious',
        cover: 'vic.png',
        year: '2018',
        genre: 'rock',
        id: 2
    },{
        artist: 'Queens of the Stone Age',
        album: 'Villians',
        cover: 'villians.png',
        year: '2017',
        genre: 'rock',
        id: 3
    }]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.REMOVE_ACTIVE_VINYL:
            return {...state, activeVinyl: null};
        case actionTypes.SET_ACTIVE_VINYL:
            return {...state, activeVinyl: action.vinyl};
        default:
            return {...state};
    }
};

export default reducer;