import { useContext } from 'react'
import { FireDataContext, IFireData } from '../components/app/FireDataContext'

export const useFireDataContext = () => useContext<IFireData>(FireDataContext)