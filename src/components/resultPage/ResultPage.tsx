import React, { FunctionComponent, useEffect } from 'react';
import Page from '../page/Page';
import Button from '../button/Button';
import { useLocation } from 'react-router';

type ResultPageType = {
    fireNumber: number,
    fireDate: string,
    updateResult: () => void,
}

function usePageViews(cb: () => void) {
    let location = useLocation();

    useEffect(
        cb,
        [location]
    )
}

const ResultPage: FunctionComponent<ResultPageType> = (props) => {
  usePageViews(props.updateResult);

  return (
    <Page className="justify-center">
      <h2>Your FIRE number 💰</h2>
      <div>$ {props.fireNumber}</div>
      <h3>You can retire in ⏱</h3>
      <div>{props.fireDate}</div>
      <Button>Share the result 🤑</Button>
      <Button>Recommend it to friends 🙈</Button>
    </Page>
  );
};

export default ResultPage;
