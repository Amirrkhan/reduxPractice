export default function (state={}, action) {

    switch(action.type){
        case 'GET_ARTISTLIST' :
            return {...state, artistList: action.payload}

        case 'GET_ARTIST_ALL':
            return {...state, artistList: action.payload}

        case 'GET_ARTIST':
            return {...state, artistData: action.payload}

        case 'CLEAR_ARTIST_DETAIL' :
            return {...state, artistData: action.payload}

        default:
            return state;
    }

}