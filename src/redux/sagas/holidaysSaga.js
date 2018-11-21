import { call, put, takeEvery } from 'redux-saga/effects'
 
export function* fetchHolidays(action) {
    let responseBody = ''
    try {
        const response = yield call(fetch, `http://date.nager.at/api/v1/get/${action.countryCode}/2018`)
        const data = yield call([response, response.json])
        console.log(data)
        //yield put({ type: 'HOLIDAYS_FETCH_SUCCEEDED', responseBody})
        yield put({ type: 'SET_HOLIDAYS', payload: data})
    } catch (error) {
        yield put({type: "HOLIDAYS_FETCH_FAILED", error})
    }
    console.log(responseBody)

}

export function* showSuccessMessage(response){
    // console.log('success! data: ',JSON.stringify(data))
    // yield put({ type: 'SET_HOLIDAYS', value: 'asd'})
}

export default function* movieSaga() {
    yield takeEvery('HOLIDAYS_FETCH_REQUESTED', fetchHolidays)
    yield takeEvery('HOLIDAYS_FETCH_SUCCEEDED', showSuccessMessage)
}