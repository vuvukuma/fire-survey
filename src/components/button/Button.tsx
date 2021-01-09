import React, { FunctionComponent } from 'react';

type ButtonType = {
    type?: string;
}

const Button: FunctionComponent<ButtonType> = (props) => {
    return (
        <button className="rounded-3xl bg-yellow-300 p-2 h-14 shadow w-full">{props.children}</button>
    )
}

export default Button;