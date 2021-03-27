import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IBaseModalProps, BaseModal } from '../baseModal/BaseModal'
import Button from '../../../components/button/Button'
import { copyToClipBoard } from '../../../util/Share'

export const SharingResultModal: React.FC<IBaseModalProps> = (props) => {
    const shareUrl = window.location.href

    function handleClick() {
        copyToClipBoard(shareUrl)
    }

    return (
        <BaseModal {...props}>
            <div className="w-full text-lg text-center">
                <FormattedMessage
                    defaultMessage="Share the Result"
                    description="sharing result modal text"
                ></FormattedMessage>
            </div>
            <div className="m-4 mb-4">
                <input type="text" className="w-full" value={shareUrl} readOnly></input>
            </div>
            <Button 
                className="mb-4"
                textColor="white"
                bgColor="purple-600" 
                onClick={handleClick}>
                <FormattedMessage
                    defaultMessage="Copy URL to clipboard"
                    description="copy test url button"
                ></FormattedMessage>
            </Button>
        </BaseModal>
    )
}

export default SharingResultModal
