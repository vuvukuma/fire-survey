import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'

import IntroPage from '../../layout/page/introPage/IntroPage'
import QuestionPage, {
    QuestionPageType,
} from '../../layout/page/questionPage/QuestionPage'
import ResultPage from '../../layout/page/resultPage/ResultPage'
import Footer from '../footer/Footer'

import './App.css'

const App = () => {
    const intl = useIntl()
    const [income, setIncome] = useState(10000)
    const [expense, setExpense] = useState(1000)
    const [savingsRate, setSavingsRate] = useState(0)
    const [pfValue, setPfValue] = useState(100000)
    const [fireNumber, setFireNumber] = useState(0)
    const [fireDate, setFireDate] = useState(new Date().toLocaleString())
    const questions: Array<QuestionPageType> = [
        {
            step: 1,
            totalSteps: 3,
            question: intl.formatMessage({
                description: 'Q1. monthly income question',
                defaultMessage: 'Your monthly income (after tax)',
            }),
            inputValue: income,
            handleChange: handleChangeIncome,
        },
        {
            step: 2,
            totalSteps: 3,
            question: intl.formatMessage({
                description: 'Q2. monthly expenses',
                defaultMessage: 'Your monthly expenses',
            }),
            inputValue: expense,
            handleChange: handleChangeExpense,
        },
        {
            step: 3,
            totalSteps: 3,
            question: intl.formatMessage({
                description: 'Q3. portfolio value',
                defaultMessage: 'Your current portfolio value',
            }),
            inputValue: pfValue,
            handleChange: handleChangePfValue,
        },
    ]
    const questionPages = questions.map((pageProps: QuestionPageType) => {
        return (
            <Route path={`/${pageProps.step}`} key={pageProps.step}>
                <QuestionPage {...pageProps} />
            </Route>
        )
    })

    let location = useLocation()

    useEffect(() => {
        setFireNumber(getFireNumber())
        setFireDate(getFireDate())
    })

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

    return (
        <div className="container flex flex-col items-center h-screen max-h-640 mx-auto">
            <article className="h-full md:max-w-1/4">
                <Switch location={location}>
                    {questionPages}
                    <Route
                        path="/result"
                        children={
                            <ResultPage
                                fireDate={fireDate}
                                fireNumber={fireNumber}
                                savingRate={getSavingRate() * 100}
                                updateResult={updateResult}
                                updateResultFromSavingsRate={updateResultFromSavingsRate}
                            />
                        }
                    />
                    <Route path="/">
                        <IntroPage />
                    </Route>
                </Switch>
            </article>
            <Footer />
        </div>
    )
}

export default App
