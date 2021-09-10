import React, { StrictMode } from "react";
import { Web3ReactProvider} from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ThemeProvider, ThemedGlobalStyle } from "./theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <HashRouter>
        <ThemeProvider>
          <ThemedGlobalStyle/>
            <App />
        </ThemeProvider>
      </HashRouter>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
