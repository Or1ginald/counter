import React from 'react';
import {Button} from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {counterReducerInitialStateType, incrementCounterAC, resetCounterAC} from "../reducers/counter-reducer";

export const Counter = () => {
    const counter = useSelector<rootReducerType, counterReducerInitialStateType>(state => state.counterReducer)
    const dispatch = useDispatch();
    const incrementCounter = () => {
        dispatch(incrementCounterAC())
    }
    const reset = () => {
        dispatch(resetCounterAC())
    }
    const displayCounterValue = () => {
        if (counter.counterValue === null) {
            return "Counter need to be set"
        } else {
            return counter.counterValue
        }
    }


    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className="counterDisplay">{displayCounterValue()}</div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Inc"} callBack={incrementCounter} isDisabled={counter.isIncButtonDisabled}/>
                        <Button title={"Reset"} callBack={reset} isDisabled={counter.isResetButtonDisabled}/></div>
                </div>
            </div>
        </div>
    );
};
