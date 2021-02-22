import React, { useState, useEffect, FunctionComponent } from 'react';

type ProgressBarType = {
    step: number,
    totalSteps: number
}

function getProgressByStep(step: number, totalSteps: number) {
    return Math.floor(step / totalSteps * 100) / 100;
}

const ProgressBar: FunctionComponent<ProgressBarType> = (props) => {
    const [progress, setProgress] = useState(getProgressByStep(props.step - 1, props.totalSteps));

    useEffect(() => {
        setProgress(getProgressByStep(props.step, props.totalSteps));
    }, [props.step, props.totalSteps])

    return (
        <div className="relative pt-4">
            <div className="overflow-hidden h-1 mb-4 text-xs flex bg-purple-100">
                <div 
                    style={{ transform: `scaleX(${progress})` }} 
                    className="w-full transition-transform origin-left duration-300 ease-in-out bg-purple-700">
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;