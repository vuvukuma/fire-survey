import React, { FunctionComponent, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useIntl } from 'react-intl'

import QuestionPage, {
    QuestionPageType,
} from 'layout/page/questionPage/QuestionPage'

import { useFireState } from 'hooks/UseFireState'

const QuestionPages: FunctionComponent = () => {
    const intl = useIntl()
    const {
        income,
        expense,
        pfValue,
        handleChangeIncome,
        handleChangeExpense,
        handleChangePfValue,
    } = useFireState();

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

    return (
        <>
            {
                questions.forEach((pageProps: QuestionPageType) => {
                    <Route path={`/${pageProps.step}`} key={pageProps.step}>
                        <QuestionPage {...pageProps} />
                    </Route>
                })
            }
        </>
    )
}

export default QuestionPages
