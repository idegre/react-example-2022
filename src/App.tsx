import React from 'react';
import { Provider } from 'react-redux';
import { MainScreen } from './screens';
import { store } from './store';

export const App = () => <Provider store={store}><MainScreen /></Provider>;