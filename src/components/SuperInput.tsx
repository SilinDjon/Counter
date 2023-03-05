import React, {ChangeEvent} from "react";

export type ValueTitleType = {
    title: string
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    errorValid: boolean
    value: number
}

export const SuperInput = (props: ValueTitleType) => {

    return (
        <div>
            <span>{props.title}:</span> <input value={props.value} className={props.errorValid ? 'Red' : ''}
                                               type={'Number'} onChange={props.callBack}/>
        </div>
    )
}