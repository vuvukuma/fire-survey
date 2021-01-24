import React, { FunctionComponent } from 'react';

type ButtonType = {
    className?: string;
    bgColor?: string;
    textColor?: string;
    disabled?: boolean;
}

const Button: FunctionComponent<ButtonType> = (props) => {
    const bgColor = `bg-${props.bgColor || 'yellow-300'}`;
    const textColor = `text-${props.textColor || ''}`;

    return (
        <button
            className={
                `rounded-3xl p-2 h-14 shadow w-full ${bgColor} ${textColor} ` + (props.className || "")
            }
            disabled={ props.disabled ? props.disabled: false }
        >{props.children}</button>
    )
}

export default Button;