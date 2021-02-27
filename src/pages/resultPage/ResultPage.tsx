import React, { FunctionComponent, useEffect } from 'react'
import { useLocation } from 'react-router'
import { FormattedMessage } from 'react-intl'

import Page from '../page/Page'
import Button from '../../components/button/Button'

type ResultPageType = {
    fireNumber: number
    fireDate: string
    updateResult: () => void
}

function usePageViews(cb: () => void) {
    let location = useLocation()

    useEffect(cb, [location])
}

const ResultPage: FunctionComponent<ResultPageType> = (props) => {
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
            <div className="w-full">
                <div>
                    <FormattedMessage
                        defaultMessage="Speed up your FIRE"
                        description=""
                    ></FormattedMessage>
                    <br />
                    <FormattedMessage
                        defaultMessage="by boosting savings rate 💸"
                        description=""
                    ></FormattedMessage>
                </div>
                <div className="py-8">
                    <input className="w-full" type="range"></input>
                </div>
            </div>
            <div>
                <Button className="mb-4">
                    <FormattedMessage
                        defaultMessage="Share the result 🤑"
                        description="Share the result"
                    ></FormattedMessage>
                </Button>
                <Button textColor="white" bgColor="purple-600">
                    <FormattedMessage
                        defaultMessage="Recommend it to friends 🙈"
                        description="Share this page"
                    ></FormattedMessage>
                </Button>
            </div>
        </Page>
    )
}

export default ResultPage
