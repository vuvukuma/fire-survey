import React, { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import IntroPage from '../../pages/introPage/IntroPage'
import QuestionPage, {
    QuestionPageType,
} from '../../pages/questionPage/QuestionPage'
import ResultPage from '../../pages/resultPage/ResultPage'
import Footer from '../footer/Footer'
import './App.css'
import { getMessages } from '../../i18n'

const browserLocale = navigator.language.slice(0, 2)
const messages = getMessages(browserLocale)

const App = () => {
    const [locale] = React.useState(browserLocale)

    const [income, setIncome] = useState(10000)
    const [expense, setExpense] = useState(1000)
    const [pfValue, setPfValue] = useState(100000)
    const [fireNumber, setFireNumber] = useState(0)
    const [fireDate, setFireDate] = useState(new Date().toLocaleString())
    const questions: Array<QuestionPageType> = [
        {
            step: 1,
            totalSteps: 3,
            question: 'Your monthly income (after tax)',
            inputValue: income,
            handleChange: handleChangeIncome,
        },
        {
            step: 2,
            totalSteps: 3,
            question: 'Your monthly expense',
            inputValue: expense,
            handleChange: handleChangeExpense,
        },
        {
            step: 3,
            totalSteps: 3,
            question: 'Your current portfolio value',
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

    function getFireDate(): string {
        const fireNumber: number = getFireNumber()
        const difference: number = fireNumber - pfValue
        const saving: number = income - expense
        const savingRate: number = saving / income
        const remainingMonths: number = Math.round(
            difference / (income * savingRate)
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
        <IntlProvider locale={locale} messages={messages}>
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
        </IntlProvider>
    )
}

export default App
