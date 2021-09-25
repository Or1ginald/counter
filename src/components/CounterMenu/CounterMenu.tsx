import React from 'react';
import {Button} from "../Button/Button";
import styles from "./CounterMenu.module.css"
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {setCounterParametersAC} from "../../reducers/counter-reducer";
import {counterMenuReducerInitialStateType, setInitValueAC, setMaxValueAC} from '../../reducers/counter-menu-reducer';

export const CounterMenu = () => {
    const counterMenu = useSelector<rootReducerType, counterMenuReducerInitialStateType>(state => state.counterMenuReducer)
    const dispatch = useDispatch();
    const setInitValue = (newValue: string) => {
        dispatch(setInitValueAC(newValue))
    }
    const setMaxValue = (newValue: string) => {
        dispatch(setMaxValueAC(newValue))
    }
    const setCounterValues = () => {
        function isNumber(str: string) {
            return /^-?\d+$/.test(str);
        }
        if(isNumber(counterMenu.initValue)&&isNumber(counterMenu.maxValue)) {
            dispatch(setCounterParametersAC(counterMenu.initValue, counterMenu.maxValue))
        } else {
            console.log("Input isn't numeric");
        }
    }

    function isDisabled() {
        let isValuesExist = !(counterMenu.initValue && counterMenu.maxValue)//counter.property!==""
        let isValidNumbers = Number(counterMenu.initValue) < Number(counterMenu.maxValue);
        if (isValuesExist) { //Not null check
            return true
        } else {
            return !isValidNumbers // need to return opposite bc func will be applied to button disabled
        }
    }

    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className={styles.inputsArea}>
                    <Input title={"Initial Value"} callBack={setInitValue} value={counterMenu.initValue}/>
                    <Input title={"Max Value"} callBack={setMaxValue} value={counterMenu.maxValue}/>
                </div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Set value"} callBack={setCounterValues} isDisabled={isDisabled()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
