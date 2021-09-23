import React, {ChangeEvent, useState} from 'react';
import styles from "./Input.module.css"

type InputPropsType = {
    title: string
}


export const Input = (props:InputPropsType) => {
     const [inputValue, setInputValue]= useState("0")
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
    }
    return (
        <input className={styles.input} type="text" placeholder={props.title}
        onChange={onChangeHandler}/>
    );
};

