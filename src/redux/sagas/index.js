import { put, takeEvery, all } from 'redux-saga/effects'
import holidaysSaga from './holidaysSaga'

export default function* rootSaga(){
    yield all([
        holidaysSaga()
    ])
}

