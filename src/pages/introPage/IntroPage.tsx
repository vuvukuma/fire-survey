import React, { FunctionComponent } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'

import Page from '../page/Page'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import HeroImage from '../../assets/images/big-shoes.png'

const IntroPage: FunctionComponent = () => {
    const intl = useIntl()

    return (
        <Page className="justify-center">
            <h1 className="text-center text-3xl font-bold mb-6">
                <FormattedMessage
                    defaultMessage="When can I retire? 🔥"
                    description="Intro page title"
                ></FormattedMessage>
            </h1>
            <img
                className="mb-10"
                src={HeroImage}
                alt={intl.formatMessage({
                    description: 'hero image alt text on the intro page',
                    defaultMessage: 'Financial Freedom',
                })}
            />
            <Link to="/1">
                <Button>
                    <FormattedMessage
                        defaultMessage="Let's check this out ⏱"
                        description="Intro page start button text"
                    ></FormattedMessage>
                </Button>
            </Link>
        </Page>
    )
}

export default IntroPage
