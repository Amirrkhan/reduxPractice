import axios from 'axios'

const URL = 'http://localhost:3004/'

export function artistListAll () {

    const request = axios.get(`${URL}artists?_limit=6`).then(response => response.data)  
    return {
        type: 'GET_ARTIST_ALL',
        payload: request
    }
}

export function artistList (keyword) {
    const request = axios.get(`${URL}artists?q=${keyword}`).then(response => response.data)  
    return {
        type: 'GET_ARTISTLIST',
        payload: request
    }
}

export function getOneArtist (id) {
    const request = axios.get(`${URL}artists?id=${id}`).then(response => response.data)  
    return {
        type: 'GET_ARTIST',
        payload: request
    }
}

export function clearArtistInfo(){
    return {
        type: 'CLEAR_ARTIST_DETAIL',
        payload: null
    }
}