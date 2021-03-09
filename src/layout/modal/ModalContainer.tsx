import React from 'react'
import { ModalProps } from './Modal'

export const ModalContainer: React.FC<ModalProps> = ({
    children,
    id,
    isOpen,
    modalClassName,
    closeModal,
}) => {
    return (
        <div
            className={`${isOpen ? 'flex' : 'hidden'} ${modalClassName ?? ''}`}
            onClick={closeModal}
        >
            <div
                className={`bg-white max-w-xl w-full p-5 my-6 mx-autorounded`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default ModalContainer
