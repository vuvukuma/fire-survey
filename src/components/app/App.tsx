import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from '../header/Header';
import IntroPage from '../introPage/IntroPage';
import QuestionPage, { QuestionPageType } from '../questionPage/QuestionPage';
import ResultPage from '../resultPage/ResultPage';
import Footer from '../footer/Footer';
import "./App.css";

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [pfValue, setPfValue] = useState(0);
  const [fireNumber, setFireNumber] = useState(0);
  const [fireDate, setFireDate] = useState(new Date().toLocaleString());
  const [progress, setProgress] = useState(0);
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
    }
  ]
  const questionPages = questions.map((pageProps: QuestionPageType) => {
    return (
      <Route path={`/${pageProps.step}`} key={pageProps.step}>
        <QuestionPage {...pageProps}/>
      </Route>
    )
  })

  let location = useLocation();

  function getFireNumber(): number {
    return expense * 300;
  }

  function getFireDate(): string {
    const fireNumber: number = getFireNumber();
    const difference: number = fireNumber - pfValue;
    const remainingMonths: number = Math.round(difference / (income - expense));
    const today: Date = new Date();

    today.setMonth(today.getMonth() + remainingMonths);
    
    return today.toLocaleDateString();
  }

  function updateResult(): void {
    setFireNumber(getFireNumber());
    setFireDate(getFireDate());
  }

  function handleChangeIncome(e: React.FormEvent<HTMLInputElement>): void {
    setIncome(parseInt(e.currentTarget.value, 10));
  }

  function handleChangeExpense(e: React.FormEvent<HTMLInputElement>): void {
    setExpense(parseInt(e.currentTarget.value, 10));
  }

  function handleChangePfValue(e: React.FormEvent<HTMLInputElement>): void {
    setPfValue(parseInt(e.currentTarget.value, 10))
  }
  
  return (
    <article className="container flex flex-col mx-auto p-4 h-screen">
      { location.pathname !== '/' ? <Header now={progress}/> : null }
      <TransitionGroup className="h-full">
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
        >
          <Switch location={location}>
            {questionPages}
            <Route path="/result" children={
              <ResultPage
                fireDate={fireDate}
                fireNumber={fireNumber}
                updateResult={updateResult} />
            }/>
            <Route path="/">
              <IntroPage/>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer/>
    </article>
  );
}

export default App;
