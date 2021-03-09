import React, { useState, useCallback } from 'react'
import { ModalContext } from './ModalContext'

export interface ModalProviderProps {
    backdropClassName?: string
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [openModal, setOpenModal] = useState<string | null>(null)
    const add = useCallback((_id: string) => {
        setOpenModal((prev) => {
            return prev === _id ? prev : _id
        })
    }, [])

    const remove = useCallback(() => {
        setOpenModal(null)
    }, [])

    const modalOpen = openModal !== null

    return (
        <ModalContext.Provider value={{ add, remove }}>
            {children}
            {!modalOpen ? null : (
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            )}
            <div id="modal-container"></div>
        </ModalContext.Provider>
    )
}
