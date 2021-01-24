import React, { FunctionComponent } from "react";
import Page from '../page/Page';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/images/big-shoes.png';

const IntroPage: FunctionComponent = () => {
  return (
    <Page className="justify-center">
      <h1 className="text-center text-3xl font-bold mb-6">When can I retire 🔥</h1>
      <img className="mb-10" src={HeroImage} alt="Financial Freedom"/>
      <Link to="/1">
        <Button>Let's check this out ⏱</Button>
      </Link>
    </Page>
  );
};

export default IntroPage;
