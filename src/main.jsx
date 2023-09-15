import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
<GoogleOAuthProvider clientId='464935086186-n100nr160jenbu6cbqgi9c4d85lkq5nl.apps.googleusercontent.com'>
    <Provider store={store}>
    <App />
    </Provider>
  </GoogleOAuthProvider>
  //</React.StrictMode>,
)
