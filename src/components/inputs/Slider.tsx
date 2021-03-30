import React, { useState, FunctionComponent } from 'react'

type SliderType = {
    initialValue?: number,
    handleRangeChange?: (value: number) => void,
}

const Slider: FunctionComponent<SliderType> = (props) => {
    const [value, setValue] = useState(props.initialValue || 0)

    function onRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = parseInt(event.target.value, 10);

        setValue(newValue)
        
        if (props.handleRangeChange) {
            props.handleRangeChange(newValue / 100)
        }
    }

    return (
        <div>
            <div className="w-full text-right">{value}%</div>
            <input
                className="w-full"
                type="range"
                min="0"
                max="100"
                step="5"
                value={value}
                onChange={onRangeChange}
            ></input>
        </div>
    )
}

export default Slider
