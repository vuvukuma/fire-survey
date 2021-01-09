import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../progressBar/ProgressBar';

type HeaderType = {
  now: number
}

const Header: FunctionComponent<HeaderType> = (props) => {
  let history = useHistory();
  
  function handleClick() {  
    history.goBack();
  }

  return (
    <header>
      <nav>
        <button onClick={handleClick}>Back</button>
      </nav>
      <ProgressBar {...props}></ProgressBar>
    </header>
  );
};

export default Header;