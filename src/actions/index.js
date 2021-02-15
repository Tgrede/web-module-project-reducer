export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"

const addOne = () => {
    return({type:ADD_ONE});
}

const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export default {
    addOne: addOne,
    applyNumber: applyNumber,
    changeOperation: changeOperation,
    clearDisplay: clearDisplay
}