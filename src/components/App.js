import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "./Error404";

// firebase SDK
import firebase from "firebase/app";
import "firebase/functions";
import "firebase/analytics";
// import { useState, useEffect } from "react";

// Initialize Firebase
// @TODO_DEVELOPER
const firebaseConfig = {
  apiKey: "AIzaSyCrd7MbN-smPNSlHwrr2lq1wY4v1dJz-pU",
  authDomain: "react-firebase-boilerpla-fc860.firebaseapp.com",
  projectId: "react-firebase-boilerpla-fc860",
  storageBucket: "react-firebase-boilerpla-fc860.appspot.com",
  messagingSenderId: "179704017243",
  appId: "1:179704017243:web:e767e80c2f5bc382476a7e",
  measurementId: "G-8LZP1MPK3C",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/404">
          <Error404 />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
