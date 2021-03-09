import { useContext } from 'react'
import { ModalContext, IModalContext } from '../layout/modal/ModalContext'

export const useModalContext = () => useContext<IModalContext>(ModalContext)
