import React, {ChangeEvent} from 'react';
import styles from "./Input.module.css"

type InputPropsType = {
    title: string
    callBack: (newValue: string) => void
    value: string
}


export const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // function isNumber(str: string) {
        //     return /^-?\d+$/.test(str);
        // }

        let digit = e.currentTarget.value;
        return /*isNumber(digit)? */props.callBack(digit) /*: false*/
    }
    return (
        <input className={styles.input} type="text" placeholder={props.title}
               onChange={onChangeHandler} value={props.value}/>
    );
};

