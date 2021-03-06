import React, { StrictMode } from 'react';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, ThemedGlobalStyle } from './theme';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { getLibrary } from './utils';
import App from './App';

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK');

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <BrowserRouter>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
);

console.log('Service Worker is Enabled?: ', process.env.REACT_APP_SERVICE_WORKER);

if (process.env.REACT_APP_SERVICE_WORKER === 'true') {
  serviceWorkerRegistration.register();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
