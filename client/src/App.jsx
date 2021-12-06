import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from 'components/Theme';
import { Routes } from 'pages';
import { GlobalStateProvider } from 'state/global';

import './App.scss';


export default function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Theme>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Theme>
      </div>
    </GlobalStateProvider>
  );
}
