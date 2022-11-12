import React from 'react'

export interface IFireData {
    income: number;
    expense: number;
    pfValue: number;
}

export const FireDataContext = React.createContext({} as IFireData)