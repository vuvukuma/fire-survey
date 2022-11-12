import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'

import IntroPage from '../../layout/page/introPage/IntroPage'
import QuestionPages from '../../layout/page/questionPage/QuestionPages'
import ResultPage from '../../layout/page/resultPage/ResultPage'
import Footer from '../footer/Footer'

import { FireDataContext, IFireData } from './FireDataContext'
import { useFireState } from 'hooks/UseFireState'

import './App.css'

const App = () => {
    const {
        fireNumber,
        fireDate,
        getSavingRate,
    } = useFireState();
   
    let location = useLocation()

    const defaultValue: IFireData = {
        income: 10000,
        expense: 1000,
        pfValue: 100000,
    }

    return (
        <FireDataContext.Provider value={defaultValue}>
            <div className="container flex flex-col items-center h-screen max-h-640 mx-auto">
                    <article className="h-full md:max-w-1/4">
                        <Switch location={location}>
                            <Route
                                path="/result"
                                children={
                                    <ResultPage
                                        fireDate={fireDate}
                                        fireNumber={fireNumber}
                                        savingRate={getSavingRate() * 100}
                                    />
                                }
                            />
                            {/* <QuestionPages /> */}
                            <Route path="/">
                                <IntroPage />
                            </Route>
                        </Switch>
                    </article>
                    <Footer />
                </div>
        </FireDataContext.Provider>
    )
}

export default App
