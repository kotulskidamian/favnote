import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div className="Root">
    <GlobalStyle />
    <h1>Hello</h1>
    <Button>close / save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
