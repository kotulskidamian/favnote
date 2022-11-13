import React from 'react';
import GlobalStyle from '../src/theme/GlobalStyle';

const withGlobalProvider = Story => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withGlobalProvider];
