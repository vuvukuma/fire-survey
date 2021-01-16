import React, { FunctionComponent } from 'react';

type ProgressBarType = {
    step: number,
    totalSteps: number
}

const ProgressBar: FunctionComponent<ProgressBarType> = (props) => {
    return (
        <div className="relative pt-4">
            <div className="overflow-hidden h-1 mb-4 text-xs flex bg-purple-100">
                <div 
                    style={{width: `${Math.floor(props.step / props.totalSteps * 100)}%`}} 
                    className="bg-purple-700">
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;