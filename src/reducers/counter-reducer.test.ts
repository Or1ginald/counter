import {counterReducer, incrementCounterAC} from "./counter-reducer";

test("reducer should increment counter value", ()=>{
    const startState = 1;
    const endState = counterReducer(startState, incrementCounterAC(2))
    expect(endState).toBe(2)
})
test("counter should not pass max value", ()=>{
    const startState = 3;
    const endState = counterReducer(startState, incrementCounterAC(3))
    expect(endState).toBe(3)
    expect(endState).not.toBe(4)
})