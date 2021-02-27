import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import ProgressBar from '../progressBar/ProgressBar'

type HeaderType = {
    step: number
    totalSteps: number
}

const Header: FunctionComponent<HeaderType> = (props) => {
    let history = useHistory()

    function handleClick() {
        history.goBack()
    }

    return (
        <header className="pt-8">
            <nav>
                <button onClick={handleClick}>
                    <FormattedMessage
                        defaultMessage="< Back"
                        description="Back button on the header"
                    ></FormattedMessage>
                </button>
                <ProgressBar {...props}></ProgressBar>
            </nav>
        </header>
    )
}

export default Header
