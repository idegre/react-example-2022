import React from 'react';
import { Provider } from 'react-redux';
import { MainScreen } from './screens/MainScreen';
import { store } from './store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const App = () => <Provider store={store}>
	<GlobalStyle />
	<MainScreen />
</Provider>;