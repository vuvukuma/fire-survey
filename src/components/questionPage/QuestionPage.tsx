import React, { FunctionComponent } from 'react';
import Page from '../page/Page';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

export type QuestionPageType = {
    step: number,
    totalSteps: number,
    question: string,
    inputValue: number,
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const QuestionPage: FunctionComponent<QuestionPageType> = (props) => {
    return (
        <Page className="py-10 px-4">
            <div className="flex flex-row justify-between py-6">
                <h2 className="text-lg">Q{props.step}.</h2>
                <span className="text-gray-400">{props.step}/{props.totalSteps}</span>
            </div>
            <h3 className="py-4 text-gray-500">{props.question}</h3>
            $<input type="number" value={props.inputValue} onChange={props.handleChange}></input>
            <div className="h-full flex flex-col justify-center">
                <Link to={props.step === props.totalSteps ? '/result' : `/${props.step + 1}`}>
                    <Button>Next</Button>
                </Link>
            </div>
        </Page>
    )
}

export default QuestionPage;