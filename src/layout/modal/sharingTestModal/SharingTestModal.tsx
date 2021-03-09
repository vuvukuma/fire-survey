import React from 'react'
import { FormattedMessage } from 'react-intl'

import { IBaseModalProps, BaseModal } from '../baseModal/BaseModal'

export const SharingTestModal: React.FC<IBaseModalProps> = (props) => {
    return (
        <BaseModal {...props}>
            <div className="w-full">
                <FormattedMessage
                    defaultMessage="Share the Test"
                    description="sharing test modal text"
                ></FormattedMessage>
            </div>
            <div className="w-full">Share Buttons</div>
        </BaseModal>
    )
}

export default SharingTestModal
