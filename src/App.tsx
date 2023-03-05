import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SettingCounter} from "./components/SettingCounter";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue);
    const [error, setError] = useState<string | null>(null)
    const [errorValid, setErrorValid] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    },[])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    },[])




    return (
        <div className={"App"}>
            <SettingCounter errorValid={errorValid} error={error} setError={setError} maxValue={maxValue}
                            setMaxValue={setMaxValue} setCount={setCount} count={count}
                            startValue={startValue} setStartValue={setStartValue}/>
            <Counter errorValid={errorValid} setErrorValid={setErrorValid} startValue={startValue} setError={setError}
                     error={error} maxValue={maxValue} count={count} setCount={setCount}/>
        </div>

    );
}

export default App;
