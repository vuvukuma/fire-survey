import React, { FunctionComponent } from "react";
import Page from '../page/Page';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const IntroPage: FunctionComponent = () => {
  return (
    <Page className="flex flex-col justify-center">
      <h1 className="text-center text-3xl font-bold">When can I retire 🔥</h1>
      <Link to="/1">
        <Button>Let's check this out ⏱</Button>
      </Link>
    </Page>
  );
};

export default IntroPage;
