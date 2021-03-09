import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IBaseModalProps, BaseModal } from '../baseModal/BaseModal'

export const SharingResultModal: React.FC<IBaseModalProps> = (props) => {
    return (
        <BaseModal {...props}>
            <div className="w-full">
                <FormattedMessage
                    defaultMessage="Share the Result"
                    description="sharing result modal text"
                ></FormattedMessage>
            </div>
            <div className="w-full">Share Buttons</div>
        </BaseModal>
    )
}

export default SharingResultModal
