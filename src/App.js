import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./scss/custom.scss";
import Amplify from 'aws-amplify';
import { withAuthenticator, SignIn, ForgotPassword } from 'aws-amplify-react';
import Home from "./views/Home";
import CustomersLoyalty from "./views/CustomersLoyalty";


//amplify configuration
Amplify.configure({
    // To get the AWS Credentials, you need to configure 
    // the Auth module with your Cognito Federated Identity Pool
    Auth: {
        identityPoolId: 'us-west-2:d8a3d2cc-597f-4151-a953-825bba136e04',
        region: 'us-west-2',
        userPoolId: 'us-west-2_M8M7Yf1Be',
        userPoolWebClientId: '150pglql01h422eimesqd1jdsi'
    },
    Analytics: {
        AWSPinpoint: {
            // OPTIONAL -  Amazon Pinpoint App Client ID
            appId: '65b7dc1dd6bc4cff9af0bc42760758e0',
            // OPTIONAL -  Amazon service region
            region: 'us-east-1',
        }
    },
    Storage: {
        AWSS3: {
            bucket: 'shareat73dbe5d9abf1416d9450acd2397a9775-react', //REQUIRED -  Amazon S3 bucket
            region: 'us-west-2', //OPTIONAL -  Amazon service region
        }
    }
});


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/customersLoyalty" component={CustomersLoyalty} />
        </div>
      </Router>
    </div>
  );
}


export default withAuthenticator(App, { usernameAttributes: 'email', authenticatorComponents: [<SignIn />, <ForgotPassword />]});
