import {Button} from "./Button";
import React, {ChangeEvent} from "react";
import {SuperInput} from "./SuperInput";


type SettingCounterPropsType = {
    startValue: number,
    setStartValue: (e: number) => void,
    count: number,
    setCount: (number: number) => void,
    maxValue: number,
    setMaxValue: (number: number) => void
    error: string | null
    setError: (error: string | null) => void
    errorValid: boolean
}

export const SettingCounter = (props: SettingCounterPropsType) => {

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const callBackHandler = () => {
        props.setCount(props.startValue)
        localStorage.setItem('counterValue', JSON.stringify(props.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
    }

    return (
        <div className="App">
            <div className="wrapper">
                <div className={'SettingCounterWrapper'}>
                    <SuperInput value={props.startValue} errorValid={props.errorValid} title={'startValue'}
                                callBack={onChangeStartValue}/>
                    <SuperInput value={props.maxValue} errorValid={props.errorValid} title={'maxValue'}
                                callBack={onChangeMaxValue}/>
                </div>
                <div className="buttonsWrapper">
                    <Button disabled={props.errorValid} name={'set'}
                            callBack={callBackHandler}/>
                </div>
            </div>
        </div>
    )

}