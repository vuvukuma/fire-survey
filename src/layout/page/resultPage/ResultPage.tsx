import React, { FunctionComponent, useEffect } from 'react'
import { useLocation } from 'react-router'
import { FormattedMessage } from 'react-intl'

import Page from 'layout/page/Page'
import Button from 'components/button/Button'
import Slider from 'components/inputs/Slider'
import SharingResultModal from 'layout/modal/sharingResultModal/SharingResultModal'
import SharingTestModal from 'layout/modal/sharingTestModal/SharingTestModal'
import { useModal } from 'hooks/UseModal'
import { share } from 'util/Share'

type ResultPageType = {
    fireNumber: number
    fireDate: string
    savingRate: number
    updateResult: () => void
}

function usePageViews(cb: () => void) {
    let location = useLocation()

    useEffect(cb, [location])
}

const ResultPage: FunctionComponent<ResultPageType> = (props) => {
    const {
        isModalOpen: isShareResultModalOpen,
        openModal: openShareResultModal,
        closeModal: closeShareResultModal,
    } = useModal()
    const {
        isModalOpen: isShareTestModalOpen,
        openModal: openShareTestModal,
        closeModal: closeShareTestModal,
    } = useModal()
    usePageViews(props.updateResult)

    function onClickShareResult() {
        share(
            {
                text: 'test',
            },
            openShareResultModal
        )
    }

    function onClickShareTest() {
        share(
            {
                text: 'test',
            },
            openShareTestModal
        )
    }

    return (
        <>
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
                        <Slider initialValue={props.savingRate}></Slider>
                    </div>
                </div>
                <div>
                    <Button className="mb-4" onClick={onClickShareResult}>
                        <FormattedMessage
                            defaultMessage="Share the result 🤑"
                            description="Share the result"
                        ></FormattedMessage>
                    </Button>
                    <Button
                        textColor="white"
                        bgColor="purple-600"
                        onClick={onClickShareTest}
                    >
                        <FormattedMessage
                            defaultMessage="Recommend it to friends 🙈"
                            description="Share this page"
                        ></FormattedMessage>
                    </Button>
                </div>
            </Page>
            <SharingResultModal
                id="sharing-result"
                isOpen={isShareResultModalOpen}
                closeModal={closeShareResultModal}
            ></SharingResultModal>
            <SharingTestModal
                id="sharing-test"
                isOpen={isShareTestModalOpen}
                closeModal={closeShareTestModal}
            ></SharingTestModal>
        </>
    )
}

export default ResultPage
