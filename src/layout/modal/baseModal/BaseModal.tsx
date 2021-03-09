import React from 'react'
import { FormattedMessage } from 'react-intl'

import Modal from '../Modal'
import Button from '../../../components/button/Button'

export interface IBaseModalProps {
    id: string
    isOpen: boolean
    closeModal: () => void
}

export const BaseModal: React.FC<IBaseModalProps> = ({
    id,
    children,
    isOpen,
    closeModal,
}) => {
    return (
        <Modal
            id={id}
            isOpen={isOpen}
            modalClassName="fixed justify-center items-center inset-0 z-50"
            closeModal={closeModal}
        >
            <div className="flex flex-col">{children}</div>
            <Button onClick={closeModal}>
                <FormattedMessage
                    defaultMessage="Close"
                    description="modal closing button"
                ></FormattedMessage>
            </Button>
        </Modal>
    )
}

export default BaseModal
