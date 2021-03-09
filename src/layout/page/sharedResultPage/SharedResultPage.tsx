import React, { FunctionComponent, useEffect } from 'react'
import { useLocation } from 'react-router'
import { FormattedMessage } from 'react-intl'

import Page from '../Page'
import Button from '../../../components/button/Button'

type ResultPageType = {
    fireNumber: number
    fireDate: string
    updateResult: () => void
}

function usePageViews(cb: () => void) {
    let location = useLocation()

    useEffect(cb, [location])
}

const SharedResultPage: FunctionComponent<ResultPageType> = (props) => {
    usePageViews(props.updateResult)

    return (
        <Page className="justify-center">
            <div className="mb-4 border-b">
                <div className="mb-8">
                    <h2 className="text-lg">
                        <FormattedMessage
                            defaultMessage="Your FIRE number 💰"
                            description="Result page heading FIRE number"
                        ></FormattedMessage>
                    </h2>
                    <div className="text-2xl">
                        $ {props.fireNumber.toLocaleString()}
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg">
                        <FormattedMessage
                            defaultMessage="You can retire in ⏱"
                            description="Result page heading FIRE time"
                        ></FormattedMessage>
                    </h3>
                    <div className="text-2xl">{props.fireDate}</div>
                </div>
            </div>
            <hr></hr>
            <div>
                <Button textColor="white" bgColor="purple-600">
                    <FormattedMessage
                        defaultMessage="Try this test 🙈"
                        description="Share this page"
                    ></FormattedMessage>
                </Button>
            </div>
        </Page>
    )
}

export default SharedResultPage
