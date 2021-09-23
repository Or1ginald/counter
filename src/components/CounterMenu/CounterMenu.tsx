import React from 'react';
import {Button} from "../Button/Button";
import styles from "./CounterMenu.module.css"
import {Input} from "../Input/Input";

export const CounterMenu = () => {
    return (
        <div className="outerBorder">
            <div className="counterWrap">
                <div className={styles.inputsArea}>
                    <Input title={"Initial Value"}/>
                    <Input title={"Max Value"}/>
                </div>
                <div className="controlPanel">
                    <div className="controlPanelWrapper">
                        <Button title={"Set value"} callBack={() => 5}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
