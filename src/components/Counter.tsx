import {Button} from "./Button";
import React from "react";


type CounterPropsType = {
    count: number,
    setCount: (value: number) => void
    maxValue: number
    startValue: number
    error: string | null
    setError: (error: string | null) => void
    errorValid: boolean
    setErrorValid: (errorValid: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    if (props.maxValue < 0 ||
        props.startValue < 0 ||
        (props.startValue === props.maxValue && props.maxValue !== 0) ||
        props.startValue > props.maxValue) {
        props.setError('Incorrect value')
        props.setErrorValid(true)
    } else if (props.maxValue === 0) {
        props.setError('enter values and press set')
    } else {
        props.setError(null)
        props.setErrorValid(false)
    }

    const increase = () => {
        props.setCount(props.count + 1);
    };

    const reset = () => {
        props.setCount(0)

    }
    return (
        <div className="App">
            <div className="wrapper">
                <div className={'countWrapper'}>
                    <div
                        className={props.count === props.maxValue && props.count !== 0 ? 'counterRed' : ''}>{props.error ? props.error : props.count}</div>
                </div>
                <div className="buttonsWrapper">
                    <Button disabled={props.count === props.maxValue} name={'inc'} callBack={increase}/>
                    <Button disabled={props.count === 0} name={'Reset'} callBack={reset}/>
                </div>
            </div>
        </div>
    )

}