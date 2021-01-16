import React, { FunctionComponent } from 'react'

type CurrencyInputType = {
    inputValue: number,
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const CurrencyInput: FunctionComponent<CurrencyInputType> = (props) => {
    return(
        <div className="flex flex-row py-3 border-b border-purple-700 text-lg">
            <span className="pr-1 text-purple-900">$</span>
            <input 
                type="number"
                className="w-full"
                value={props.inputValue}
                onChange={props.handleChange}>
            </input>
        </div>
    )
}

export default CurrencyInput;