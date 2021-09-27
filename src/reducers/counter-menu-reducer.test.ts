import {counterMenuReducer, counterMenuReducerInitialStateType, setInitValueAC, setMaxValueAC} from "./counter-menu-reducer";

test("reducer should set initValue", () => {
    const startState: counterMenuReducerInitialStateType = {
        initValue: "",
        maxValue: "",
    }
    const endState = counterMenuReducer(startState, setInitValueAC("5"))
    expect(endState.initValue).toBe("5")
    expect(endState.initValue).not.toBe("")
})
test("reducer should set maxValue", () => {
    const startState: counterMenuReducerInitialStateType = {
        initValue: "",
        maxValue: "",
    }
    const endState = counterMenuReducer(startState, setMaxValueAC("10"))
    expect(endState.maxValue).toBe("10")
    expect(endState.maxValue).not.toBe("")
})