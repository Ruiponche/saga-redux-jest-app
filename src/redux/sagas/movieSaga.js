import { call, put, takeEvery } from 'redux-saga/effects'

export function* fetchMovie() {
    try {
        const data = yield call(fetch, 'https://www.metaweather.com/api/location/search/?query=san')
        yield put({type: "MOVIE_FETCH_SUCCEEDED", data})
    } catch (error) {
        yield put({type: "MOVIE_FETCH_FAILED", error})
    }
}

export default function* movieSaga() {
    yield takeEvery('MOVIE_FETCH_REQUESTED', fetchMovie)
    yield takeEvery('MOVIE_FETCH_SUCCEEDED', ()=> console.log("asdasdasd succed!"))
}