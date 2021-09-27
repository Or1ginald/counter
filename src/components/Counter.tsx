import React from 'react';
import {Button} from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {
    counterReducerInitialStateType,
    incrementCounterAC,
    resetCounterAC, switchResetButtonAC,
    toggleIncButtonAC,
} from "../reducers/counter-reducer";

export const Counter = () => {
    const {
        counterValue,
        maxValue,
        isIncButtonDisabled,
        isResetButtonDisabled, counterMessage,
    } = useSelector<rootReducerType, counterReducerInitialStateType>(state => state.counterReducer)

    const dispatch = useDispatch();

    const incrementCounter = () => {
        if ((counterValue ?? 0) < (maxValue ?? 0)) {
            if ((counterValue ?? 0) + 1 === maxValue) {
                dispatch(toggleIncButtonAC())
                dispatch(incrementCounterAC())
                dispatch(switchResetButtonAC(false))

            } else {
                dispatch(switchResetButtonAC(false))
                dispatch(incrementCounterAC())
            }
        } else {
            return console.log("Что-то пошло не так")
        }
    }

    const reset = () => dispatch(resetCounterAC())

    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className="counterDisplay">{counterValue ? counterValue : counterMessage}</div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Inc"} callBack={incrementCounter} isDisabled={isIncButtonDisabled}/>
                        <Button title={"Reset"} callBack={reset} isDisabled={isResetButtonDisabled}/></div>
                </div>
            </div>
        </div>
    );
};
