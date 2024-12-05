import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MetaMaskProvider } from "@metamask/sdk-react";
import "bootstrap/dist/css/bootstrap.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "NFT Minting DApp",
          url: window.location.href,
        },
        infuraAPIKey: process.env.REACT_APP_INFURA_API_KEY, // Infura API Key 설정
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
