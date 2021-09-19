import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "./Error404";

// firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from 'firebase/functions';

const dotenv = require("dotenv");
dotenv.config();

// Initialize Firebase Functions
const app = initializeApp({
  apiKey: "AIzaSyCrd7MbN-smPNSlHwrr2lq1wY4v1dJz-pU",
  authDomain: "react-firebase-boilerpla-fc860.firebaseapp.com",
  projectId: "react-firebase-boilerpla-fc860",
  appId: "1:179704017243:web:e767e80c2f5bc382476a7e",
  measurementId: "G-8LZP1MPK3C"
});
const analytics = getAnalytics(app); // initialize analytics
const functions = getFunctions(app); // all your callable functions are now accessible fron your frontend

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
