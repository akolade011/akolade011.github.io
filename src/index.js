import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const ClientID = process.env.REACT_APP_AUTH0_CLIENT_ID;



ReactDOM.render(<Auth0Provider domain={domain} clientId ={ClientID} redirectUri={window.location.origin}><App /></Auth0Provider>, document.getElementById('root'));
