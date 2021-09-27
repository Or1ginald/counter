import React from 'react';
import {Button} from "../Button/Button";
import styles from "./CounterMenu.module.css"
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {setCounterMessageAC, setCounterParametersAC, setParametersNullAC} from "../../reducers/counter-reducer";
import {counterMenuReducerInitialStateType, setInitValueAC, setMaxValueAC} from '../../reducers/counter-menu-reducer';

export const CounterMenu = () => {
    const {
        initValue,
        maxValue
    } = useSelector<rootReducerType, counterMenuReducerInitialStateType>(state => state.counterMenuReducer)
    const dispatch = useDispatch();

    const setInitValue = (newValue: string) => dispatch(setInitValueAC(newValue))

    const setMaxValue = (newValue: string) => dispatch(setMaxValueAC(newValue))

    const setCounterValues = () => {
        function isNumber(str: string) {
            return /^-?\d+$/.test(str);
        }

        if (isNumber(initValue) && isNumber(maxValue)) {
            dispatch(setCounterParametersAC(Number(initValue), Number(maxValue)))

        } else {
            dispatch(setCounterMessageAC("Input isn't numeric"))
            dispatch(setParametersNullAC())
        }
    }

    // const isDisabled = !(initValue && maxValue) ? true : ((initValue ?? 0) >= (maxValue ?? 0))
    const isDisabled = !(initValue && maxValue) ? true : (Number(initValue) >= Number(maxValue)) //Need to return false to Enable button
    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className={styles.inputsArea}>
                    <Input title={"Initial Value"} callBack={setInitValue} value={initValue}/>
                    <Input title={"Max Value"} callBack={setMaxValue} value={maxValue}/>
                </div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Set value"} callBack={setCounterValues} isDisabled={isDisabled}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
