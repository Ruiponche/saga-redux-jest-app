import { ActionTypes } from './actionTypes'

export function setSearchbarValue(value){
    return{
        type: ActionTypes.SET_SEARCHBAR_VALUE,
        value: value
    }
}

export function setHolidays(holidays){
    return{
        type: ActionTypes.SET_HOLIDAYS,
        value: holidays
    }
}

export function getHolidays(countryCode){
    return{
        type: 'HOLIDAYS_FETCH_REQUESTED',
        countryCode: countryCode
    }
}