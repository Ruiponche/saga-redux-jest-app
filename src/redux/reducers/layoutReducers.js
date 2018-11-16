const initialState = {
    backgroundColor: "#333333",
    buttonColor: "#444444"
}

const layoutReducers=(state=initialState, action)=>{
    switch(action.type){
        case "SET_BACKGROUND_COLOR":
        return {
            ...state,
            backgroundColor: action.value
        }
        case "SET_BUTTON_COLOR":
        return{
            ...state,
            buttonColor: action.value
        }
        default:
            return state
    }
}

export default layoutReducers