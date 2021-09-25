type mainActionType =
    incrementCounterACType
    | resetCounterACType
    | setCounterParametersACType
export type incrementCounterACType = ReturnType<typeof incrementCounterAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>
type setCounterParametersACType = ReturnType<typeof setCounterParametersAC>

export type counterReducerInitialStateType = {
    "initValue": string
    "maxValue": string
    "counterValue": string
    "isIncButtonDisabled": boolean
    "isResetButtonDisabled": boolean
}

const initialState: counterReducerInitialStateType = {
    "initValue": "",
    "maxValue": "",
    "counterValue": "Counter need to be set",
    "isIncButtonDisabled": true,
    "isResetButtonDisabled": true,
};

export const counterReducer = (state: counterReducerInitialStateType = initialState, action: mainActionType) => {
    switch (action.type) {
        case "INCREMENT-COUNTER": {
            let counterValueInt = Number(state.counterValue)
            let maxValueInt = Number(state.maxValue)
            if (counterValueInt < maxValueInt) {
                if (counterValueInt + 1 === maxValueInt) {
                    return {...state, counterValue: (counterValueInt + 1).toString(), isIncButtonDisabled: true}
                } else {
                    return {...state, counterValue: (counterValueInt + 1).toString(), isResetButtonDisabled: false}
                }
            }
            if (state.counterValue === state.maxValue) {
                return {...state, isIncButtonDisabled: true} //Пока ничего не делает
            } else {
                return {...state}
            }
        }
        case "RESET-COUNTER": {
            return {...state, counterValue: state.initValue, isIncButtonDisabled: false, isResetButtonDisabled: true}
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
        default: {
            return state
        }
    }
}

export const setCounterParametersAC = (initValue: string, maxValue: string) => {
    return {
        type: "SET-COUNTER-PARAMETERS",
        initValue,
        maxValue
    }
}
export const incrementCounterAC = () => {
    return {
        type: "INCREMENT-COUNTER",
    } as const
}
export const resetCounterAC = () => {
    return {
        type: "RESET-COUNTER",
    } as const
}