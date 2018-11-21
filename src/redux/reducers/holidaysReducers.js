const initialState = {
    searchbarValue: "",
    holidays: ""
}

const holidaysReducers=(state=initialState, action)=>{
    switch(action.type){
        case "SET_SEARCHBAR_VALUE":
            return{
                ...state,
                searchbarValue: action.value
            }
        case "SET_HOLIDAYS":
            return{
                ...state,
                holidays: action.payload
            }
        default:
            return state
    }
}

export default holidaysReducers