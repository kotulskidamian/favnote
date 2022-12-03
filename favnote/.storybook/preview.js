import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlobalStyle';
import { theme } from '../src/theme/mainTheme';

const withGlobalProvider = Story => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
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
