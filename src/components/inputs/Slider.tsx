import React, { useState, FunctionComponent } from 'react'

type SliderType = {
    initialValue?: number
}

const Slider: FunctionComponent<SliderType> = (props) => {
    const [value, setValue] = useState(props.initialValue || 0)

    function onRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(parseInt(event.target.value, 10))
    }

    return (
        <>
        {value}%
        <input
            className="w-full"
            type="range"
            min="0"
            max="100"
            step="5"
            value={value}
            onChange={onRangeChange}
        ></input>
        </>
    )
}

export default Slider
