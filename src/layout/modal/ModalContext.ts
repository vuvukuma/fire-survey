import React from 'react'

export interface IModalContext {
    add(id: string): void
    remove(id: string): void
}

export const ModalContext = React.createContext({} as IModalContext)
