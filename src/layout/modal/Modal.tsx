import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useModalContext } from '../../hooks/UseModalContext'

import ModalContainer from './ModalContainer'

export interface ModalProps {
    id: string
    isOpen: boolean
    modalClassName?: string
    closeModal?: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { add, remove } = useModalContext()
    const { id, isOpen } = props

    useEffect(() => {
        isOpen ? add(id) : remove(id)
        return () => remove(id)
    }, [id, isOpen])

    return ReactDOM.createPortal(
        <ModalContainer {...props}>{props.children}</ModalContainer>,
        document.body
    )
}

export default Modal
