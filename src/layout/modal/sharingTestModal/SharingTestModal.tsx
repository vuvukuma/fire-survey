import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IBaseModalProps, BaseModal } from '../baseModal/BaseModal'
import Button from '../../../components/button/Button'
import { copyToClipBoard } from '../../../util/Share'

export const SharingTestModal: React.FC<IBaseModalProps> = (props) => {
    const shareUrl = window.location.origin;

    function handleClick() {
        copyToClipBoard(shareUrl)
    }

    return (
        <BaseModal {...props}>
            <div className="w-full text-center">
                <FormattedMessage
                    defaultMessage="Share the Test"
                    description="sharing test modal text"
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

export default SharingTestModal
