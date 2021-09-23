import React, {useState} from 'react';
import {Button} from "./Button/Button";

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const incrementCounter = () => {
        setCounter(counter+1)
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className="counterDisplay">{counter}</div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Inc"} callBack={incrementCounter}/>
                        <Button title={"Reset"} callBack={reset}/></div>
                </div>
            </div>
        </div>
    );
};
