export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const SET_TOTAL_TO_MEMORY = "SET_TOTAL_TO_MEMORY"
export const APPLY_MEMORY_TO_TOTAL = "APPLY_MEMORY_TO_TOTAL"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

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

const setTotalToMemory = () => {
    return({type:SET_TOTAL_TO_MEMORY})
}

const applyMemoryToTotal = () => {
    return({type:APPLY_MEMORY_TO_TOTAL})
}

const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}

export default {
    addOne: addOne,
    applyNumber: applyNumber,
    changeOperation: changeOperation,
    clearDisplay: clearDisplay,
    setTotalToMemory: setTotalToMemory,
    applyMemoryToTotal: applyMemoryToTotal,
    clearMemory: clearMemory
}