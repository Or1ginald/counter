import React, {ChangeEvent} from 'react';
import styles from "./Input.module.css"

type InputPropsType = {
    title: string
    callBack: (newValue: number)=>void
}


export const Input = (props: InputPropsType) => {
    function isNumber(str:string){
        return Number(str)===+str
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let digit = e.currentTarget.value;
        return isNumber(digit)? props.callBack(+digit): null
    }
    return (
        <input className={styles.input} type="text" placeholder={props.title}
               onChange={onChangeHandler}/>
    );
};

