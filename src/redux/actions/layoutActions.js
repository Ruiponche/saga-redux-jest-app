import { ActionTypes } from './actionTypes'

export function setBackgroundColor(backgroundColor) {
    return {
        type: ActionTypes.SET_BACKGROUND_COLOR,
        value: backgroundColor
    }
}

export function setButtonColor(buttonColor) {
    return {
        type: ActionTypes.SET_BUTTON_COLOR,
        value: buttonColor
    }
}