type mainActionType = setInitValueACType | setMaxValueACType;
type setInitValueACType = ReturnType<typeof setInitValueAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>

export type counterMenuReducerInitialStateType = {
    initValue: string,
    maxValue: string,
}

export const counterMenuReducerInitialState: counterMenuReducerInitialStateType = {
    initValue: "",
    maxValue: "",
}

export const counterMenuReducer = (state = counterMenuReducerInitialState, action: mainActionType): counterMenuReducerInitialStateType => {
    switch (action.type) {
        case "SET-INIT-VALUE": {
            return {...state, initValue: action.newValue}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.newValue}
        }
        default: {
            return state
        }
    }
}

export const setInitValueAC = (newValue: string) => {
    return {
        type: "SET-INIT-VALUE",
        newValue,
    } as const
}
export const setMaxValueAC = (newValue: string) => {
    return {
        type: "SET-MAX-VALUE",
        newValue,
    } as const
}