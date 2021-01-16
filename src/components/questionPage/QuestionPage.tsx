import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Page from '../page/Page';
import Button from '../button/Button';
import Header from '../header/Header';
import CurrencyInput from '../inputs/CurrencyInput';

export type QuestionPageType = {
    step: number,
    totalSteps: number,
    question: string,
    inputValue: number,
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const QuestionPage: FunctionComponent<QuestionPageType> = (props) => {
    let location = useLocation();

    function handleClickNext() {
        
    }

    return (
        <Page>
            {location.pathname !== '/' 
                ? <Header {...props} /> 
                : null 
            }
            <div className="flex flex-row justify-between py-6">
                <h2 className="text-lg">Q{props.step}.</h2>
                <span className="text-gray-400">{props.step}/{props.totalSteps}</span>
            </div>
            <h3 className="py-4 text-gray-500">{props.question}</h3>
            <CurrencyInput inputValue={props.inputValue} handleChange={props.handleChange}/>
            <div className="h-full flex flex-col justify-center">
                <Link to={props.step === props.totalSteps ? '/result' : `/${props.step + 1}`}>
                    <Button>Next</Button>
                </Link>
            </div>
        </Page>
    )
}

export default QuestionPage;