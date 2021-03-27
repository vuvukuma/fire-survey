import React, { useState } from 'react'
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

    function getFireNumber(): number {
        return expense * 300
    }

    function getSavingRate(): number {
        return (income - expense) / income
    }

    function getFireDate(): string {
        const fireNumber: number = getFireNumber()
        const difference: number = fireNumber - pfValue
        
        const remainingMonths: number = Math.round(
            difference / (income * getSavingRate())
        )
        const today: Date = new Date()

        today.setMonth(today.getMonth() + remainingMonths)

        return today.toLocaleDateString()
    }

    function updateResult(): void {
        setFireNumber(getFireNumber())
        setFireDate(getFireDate())
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
