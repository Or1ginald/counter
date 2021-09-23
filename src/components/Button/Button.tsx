import React from 'react';
import style from "./Button.module.css"

type ButtonPropsType = {
    title: string
    callBack:()=>void
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button className={style.button} onClick={props.callBack}>
            {props.title}
        </button>
    );
};

