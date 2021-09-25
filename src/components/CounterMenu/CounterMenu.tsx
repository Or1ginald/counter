import React from 'react';
import {Button} from "../Button/Button";
import styles from "./CounterMenu.module.css"
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {
    counterReducerInitialStateType,
    setCounterValueAC,
    setInitValueAC,
    setMaxValueAC
} from "../../reducers/counter-reducer";

export const CounterMenu = () => {
    const counter = useSelector<rootReducerType, counterReducerInitialStateType>(state => state.counterReducer)
    const dispatch = useDispatch();
    const setInitValue = (newValue: number) => {
        dispatch(setInitValueAC(newValue))
    }
    const setMaxValue = (newValue: number) => {
        dispatch(setMaxValueAC(newValue))
    }
    const setCounterValue = () => {
        dispatch(setCounterValueAC())
    }

    function isDisabled() {
        let isValuesNotNull = !(counter.initValue && counter.maxValue)//counter.property!==null
        let isValidNumbers = counter.initValue < counter.maxValue;
        if (isValuesNotNull) { //Not null check
            return true
        } else {
            return !isValidNumbers // need to return opposite bc func will be applied to button disabled
        }
    }

    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className={styles.inputsArea}>
                    <Input title={"Initial Value"} callBack={setInitValue}/>
                    <Input title={"Max Value"} callBack={setMaxValue}/>
                </div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Set value"} callBack={setCounterValue} isDisabled={isDisabled()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
