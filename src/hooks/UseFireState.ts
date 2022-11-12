import { useState, useEffect } from 'react'

export const useFireState = () => {
    const [income, setIncome] = useState(10000)
    const [expense, setExpense] = useState(1000)
    const [pfValue, setPfValue] = useState(100000)
    const [savingsRate, setSavingsRate] = useState(0)
    const [fireNumber, setFireNumber] = useState(0)
    const [fireDate, setFireDate] = useState(new Date().toLocaleString())
    
    function getFireNumber(): number {
        return expense * 300
    }

    function getSavingRate(): number {
        return (income - expense) / income
    }

    function getFireDate(newSavingRate?: number): string {
        const fireNumber: number = getFireNumber()
        const difference: number = fireNumber - pfValue
        const savingRatio: number = newSavingRate || getSavingRate()
        
        setSavingsRate(savingRatio)

        if (savingRatio === 0) {
            return (new Date(8640000000000000)).toLocaleDateString()
        }

        if (difference <= 0) {
            return (new Date()).toLocaleDateString()
        }

        const remainingMonths: number = Math.round(
            difference / (income * savingRatio)
        )
        
        return calculateFireDate(remainingMonths)
    }

    function calculateFireDate(remainingMonths: number): string {
        const today: Date = new Date()

        today.setMonth(today.getMonth() + remainingMonths)

        return today.toLocaleDateString()
    }

    function updateResult(): void {
        setFireNumber(getFireNumber())
        setFireDate(getFireDate())
    }

    function updateResultFromSavingsRate(newSavingRate: number): void {
        const updatedSaving: number = income * newSavingRate
        const updatedExpense: number = income - updatedSaving

        setExpense(updatedExpense)
        setSavingsRate(newSavingRate)
    }

    function handleChangeIncome(e: React.FormEvent<HTMLInputElement>): void {
        const next = parseInt(e.currentTarget.value, 10)
        setIncome(next >= 0 ? next : 0)
    }

    function handleChangeExpense(e: React.FormEvent<HTMLInputElement>): void {
        const next = parseInt(e.currentTarget.value, 10)
        setExpense(next >= 0 ? next : 0)
    }

    function handleChangePfValue(e: React.FormEvent<HTMLInputElement>): void {
        const next = parseInt(e.currentTarget.value, 10)
        setPfValue(next >= 0 ? next : 0)
    }

    useEffect(() => {
        setFireNumber(getFireNumber())
        setFireDate(getFireDate())
    })

    return {
        income,
        expense,
        pfValue,
        savingsRate,
        fireNumber,
        fireDate,
        getSavingRate,
        updateResult,
        updateResultFromSavingsRate,
        handleChangeIncome,
        handleChangeExpense,
        handleChangePfValue,
    }
}