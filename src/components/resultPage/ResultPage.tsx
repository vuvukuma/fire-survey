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
      <div className="mb-4 border-b">
        <div className="mb-8">
          <h2 className="text-lg">
            Your FIRE number 💰
          </h2>
          <div className="text-2xl">
            $ {props.fireNumber}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg">
            You can retire in ⏱
          </h3>
          <div className="text-2xl">
            {props.fireDate}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div>
          Speed up your FIRE
          <br/>
          by boosting savings rate 💸
        </div>
        <div className="py-8">
          <input className="w-full" type="range"></input>
        </div>
      </div>
      <div>
        <Button className="mb-4">Share the result 🤑</Button>
        <Button>Recommend it to friends 🙈</Button>
      </div>
    </Page>
  );
};

export default ResultPage;
