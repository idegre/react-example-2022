import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app-root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(container!).render(<App />);