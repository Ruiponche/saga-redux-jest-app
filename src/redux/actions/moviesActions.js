import { ActionTypes } from './actionTypes'
import { fetchMovie } from '../sagas/movieSaga'

export function setSearchbarValue(value){
    return{
        type: ActionTypes.SET_SEARCHBAR_VALUE,
        value: value
    }
}

export function setMovie(movie){
    return{
        type: ActionTypes.SET_MOVIE,
        value: movie
    }
}

export function getMovie(){
    return{
        type: 'MOVIE_FETCH_REQUESTED'
    }
}