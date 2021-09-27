import {
    counterReducer,
    counterReducerInitialStateType,
    incrementCounterAC, resetCounterAC, setCounterMessageAC, setCounterParametersAC, setParametersNullAC,
    switchResetButtonAC,
    toggleIncButtonAC,
} from "./counter-reducer";

test("reducer should increment counter value", () => {
    const startState: counterReducerInitialStateType = {
        initValue: 4,
        maxValue: 10,
        counterValue: 5,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: true,
    };
    const endState = counterReducer(startState, incrementCounterAC())
    expect(endState.counterValue).toBe(6)
})
test("reducer should set counterValue to initValue", () => {
    const startState: counterReducerInitialStateType = {
        initValue: 4,
        maxValue: 10,
        counterValue: 5,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: false,
    };
    const endState = counterReducer(startState, resetCounterAC())
    expect(endState.counterValue).toBe(4)
    expect(endState.isIncButtonDisabled).toBe(false)
    expect(endState.isResetButtonDisabled).toBe(true)
})
test("reducer should set isIncButtonDisabled to opposite", () => {
    const startState: counterReducerInitialStateType = {
        initValue: null,
        maxValue: null,
        counterValue: null,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: true,
    };
    const endState = counterReducer(startState, toggleIncButtonAC())
    expect(endState.isIncButtonDisabled).toBe(false)
    expect(endState.isIncButtonDisabled).not.toBe(true)
})
test("reducer should set isResetButtonDisabled to false", () => {
    const startState: counterReducerInitialStateType = {
        initValue: null,
        maxValue: null,
        counterValue: null,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: true,
    };
    const endState = counterReducer(startState, switchResetButtonAC(false))
    expect(endState.isResetButtonDisabled).toBe(false)
    expect(endState.isResetButtonDisabled).not.toBe(true)
})
test("reducer should set new counterMessage", () => {
    const startState: counterReducerInitialStateType = {
        initValue: null,
        maxValue: null,
        counterValue: null,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: false,
    };
    const endState = counterReducer(startState, setCounterMessageAC("new message"))
    expect(endState.counterMessage).toBe("new message")
    expect(endState.counterMessage).not.toBe("Counter need to be set")
})
test("reducer should set counter parameters", () => {
    const startState: counterReducerInitialStateType = {
        initValue: null,
        maxValue: null,
        counterValue: null,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: false,
    };
    const endState = counterReducer(startState, setCounterParametersAC(5, 7))
    expect(endState.counterValue).toBe(5)
    expect(endState.initValue).toBe(5)
    expect(endState.maxValue).toBe(7)
    expect(endState.counterValue).not.toBe(null)
})
test("reducer should set reset counter", () => {
    const startState: counterReducerInitialStateType = {
        initValue: 5,
        maxValue: 15,
        counterValue: 7,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: false,
        isResetButtonDisabled: true,
    };
    const expectation = {
        initValue: null,
        maxValue: null,
        counterValue: null,
        counterMessage: "Counter need to be set",
        isIncButtonDisabled: true,
        isResetButtonDisabled: true,
    }

    const endState = counterReducer(startState, setParametersNullAC())
    expect(endState).toStrictEqual(expectation)

})

