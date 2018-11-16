const initialState = {
    searchbarValue: "",
    movie: ""
}

const movieReducers=(state=initialState, action)=>{
    switch(action.type){
        case "SET_SEARCHBAR_VALUE":
            return{
                ...state,
                searchbarValue: action.value
            }
        case "SET_MOVIE":
            return{
                ...state,
                movie: action.value
            }
        default:
            return state
    }
}

export default movieReducers