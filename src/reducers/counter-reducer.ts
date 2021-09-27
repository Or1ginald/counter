type mainActionType =
    incrementCounterACType
    | resetCounterACType
    | setCounterParametersACType
    | toggleIncButtonACType
    | switchResetButtonACType
    | setCounterMessageACType
    | setParametersNullACType
export type incrementCounterACType = ReturnType<typeof incrementCounterAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>
type setCounterParametersACType = ReturnType<typeof setCounterParametersAC>
type toggleIncButtonACType = ReturnType<typeof toggleIncButtonAC>
type switchResetButtonACType = ReturnType<typeof switchResetButtonAC>
type setCounterMessageACType = ReturnType<typeof setCounterMessageAC>
type setParametersNullACType = ReturnType<typeof setParametersNullAC>

export type counterReducerInitialStateType = {
    initValue: number | null
    maxValue: number | null
    counterValue: number | null
    counterMessage: string
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
}
const initialState: counterReducerInitialStateType = {
    initValue: null,
    maxValue: null,
    counterValue: null,
    counterMessage: "Counter need to be set",
    isIncButtonDisabled: true,
    isResetButtonDisabled: true,
};

export const counterReducer = (state: counterReducerInitialStateType = initialState, action: mainActionType): counterReducerInitialStateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER": {
            if (state.counterValue) {  //state.counterValue !== null
                return {...state, counterValue: state.counterValue + 1}
            } else {
                return {...state}
            }
        }
        case "RESET-COUNTER": {
            return {
                ...state,
                counterValue: state.initValue ? state.initValue : null,
                isIncButtonDisabled: false,
                isResetButtonDisabled: true
            }
        }
        case "TOGGLE-INC-BUTTON": {
            return {...state, isIncButtonDisabled: !state.isIncButtonDisabled}
        }
        case "SWITCH-RESET-BUTTON": {
            return {...state, isResetButtonDisabled: action.newState}
        }
        case "SET-COUNTER-PARAMETERS": {
            return {
                ...state,
                counterValue: action.initValue,
                initValue: action.initValue,
                maxValue: action.maxValue,
                isIncButtonDisabled: false
            }
        }
        case "SET-PARAMETERS-TO-NULL": {
            return {
                ...state,
                counterValue: null,
                initValue: null,
                maxValue: null,
                isIncButtonDisabled: true,
                isResetButtonDisabled: true,
            }
        }
        case "SET-COUNTER-MESSAGE": {
            return {...state, counterMessage: action.message}
        }
        default: {
            return state
        }
    }
}

export const setCounterParametersAC = (initValue: number, maxValue: number) => {
    return {
        type: "SET-COUNTER-PARAMETERS",
        initValue,
        maxValue,
    } as const
}

export const setCounterMessageAC = (message: string) => {
    return {
        type: "SET-COUNTER-MESSAGE",
        message,
    } as const
}
export const setParametersNullAC = () => {
    return {
        type: "SET-PARAMETERS-TO-NULL",
    } as const
}

export const incrementCounterAC = () => {
    return {
        type: "INCREMENT-COUNTER",
    } as const
}

export const toggleIncButtonAC = () => {
    return {
        type: "TOGGLE-INC-BUTTON"
    } as const
}
export const switchResetButtonAC = (newState: boolean) => {
    return {
        type: "SWITCH-RESET-BUTTON",
        newState
    } as const
}
export const resetCounterAC = () => {
    return {
        type: "RESET-COUNTER",
    } as const
}
