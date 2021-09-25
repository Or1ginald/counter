type mainActionType =
    incrementCounterACType
    | resetCounterACType
    | setInitValueACType
    | setMaxValueACType
    | setCounterValueACType
export type incrementCounterACType = ReturnType<typeof incrementCounterAC>
type resetCounterACType = ReturnType<typeof resetCounterAC>
type setInitValueACType = ReturnType<typeof setInitValueAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setCounterValueACType = ReturnType<typeof setCounterValueAC>

export type counterReducerInitialStateType = {
    "initValue": number | null
    "maxValue": number | null
    "counterValue": number | null
    "isIncButtonDisabled": boolean
    "isResetButtonDisabled": boolean
}

const initialState: counterReducerInitialStateType = {
    "initValue": null,
    "maxValue": null,
    "counterValue": null,
    "isIncButtonDisabled": true,
    "isResetButtonDisabled": true,
};

export const counterReducer = (state: counterReducerInitialStateType = initialState, action: mainActionType) => {
    switch (action.type) {
        case "INCREMENT-COUNTER": {
            if (state.counterValue === null && state.maxValue === null) {
                return state
            }
            // @ts-ignore
            // @ts-ignore
            if (state.counterValue < state.maxValue) {
                if (state.counterValue + 1 === state.maxValue) {
                    // @ts-ignore
                    return {...state, counterValue: state.counterValue + 1, isIncButtonDisabled: true}
                } else {
                    // @ts-ignore
                    return {...state, counterValue: state.counterValue + 1, isResetButtonDisabled: false}
                }
            }
            if (state.counterValue === state.maxValue) {
                return {...state, isIncButtonDisabled: true} //Пока ничего не делает
            } else {
                return {...state}
            }
        }
        case "RESET-COUNTER": {
            if (state.counterValue === null && state.initValue === null) {
                return state
            } else {
                return {...state, counterValue: state.initValue, isIncButtonDisabled: false}
            }
        }
        case "SET-INIT-VALUE": {
            return {...state, initValue: action.newValue}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.newValue}
        }
        case "SET-COUNTER-VALUE": {
            return {...state, counterValue: state.initValue, isIncButtonDisabled: false}
        }

        default: {
            return state
        }
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
export const setInitValueAC = (newValue: number) => {
    return {
        type: "SET-INIT-VALUE",
        newValue,
    } as const
}
export const setMaxValueAC = (newValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        newValue,
    } as const
}
export const setCounterValueAC = () => {
    return {
        type: "SET-COUNTER-VALUE",
    } as const
}