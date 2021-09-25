
import {counterReducer, incrementCounterAC} from "./counter-reducer";

test("reducer should increment counter value", () => {
    const startState = {
        "initValue": "1",
        "maxValue": "3",
        "counterValue": "2",
        "isIncButtonDisabled": true,
        "isResetButtonDisabled": true,
    };
    const endState = counterReducer(startState, incrementCounterAC())
    expect(endState.counterValue).toBe("3")
})
test("counter should not pass max value", () => {
    const startState = {
        "initValue": "1",
        "maxValue": "3",
        "counterValue": "3",
        "isIncButtonDisabled": true,
        "isResetButtonDisabled": true,
    };
    const endState = counterReducer(startState, incrementCounterAC())
    expect(endState.counterValue).toBe("3")
    expect(endState.counterValue).not.toBe("4")
})
// test("reducer should set new state for initValue", () => {
//     const startState = {
//         "initValue": "3",
//         "maxValue": "3",
//         "counterValue": "3",
//         "isIncButtonDisabled": true,
//         "isResetButtonDisabled": true,
//     };
//     const endState = counterReducer(startState, setInitValueAC("7"))
//     expect(endState.initValue).toBe("7")
//     expect(endState.maxValue).not.toBe("7")
//     expect(endState.counterValue).not.toBe("7")
// })
// test("reducer should set new state for maxValue", () => {
//     const startState = {
//         "initValue": "5",
//         "maxValue": "4",
//         "counterValue": "3",
//         "isIncButtonDisabled": true,
//         "isResetButtonDisabled": true,
//     };
//     const endState = counterReducer(startState, setMaxValueAC("15"))
//     expect(endState.initValue).not.toBe("15")
//     expect(endState.maxValue).toBe("15")
//     expect(endState.counterValue).not.toBe("15")
// })
// test("reducer should set new state for counterValue", () => {
//     const startState = {
//         "initValue": "17",
//         "maxValue": "19",
//         "counterValue": "",
//         "isIncButtonDisabled": true,
//         "isResetButtonDisabled": true,
//     };
//     const endState = counterReducer(startState, setCounterValueAC())
//     expect(endState.maxValue).toBe("19")
//     expect(endState.counterValue).toBe("17")
// })