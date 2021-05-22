import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

// Page List
import NavigationBar from "./pages/layout/navbar";
import MainPage from "./pages";
import MyKolamMain from "./pages/myKolam";
import UsersPage from "./pages/users";
import NotFoundPage from "./pages/404";
import Locations from "./pages/locations";
import Hardwares from "./pages/hardwares";
import Features from "./pages/features";
import HowTo from "./pages/howTo";
import AboutUs from "./pages/aboutUs";
//import SignIn from "./pages/signIn";
import Login from "./pages/signIn";

import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          {/*All our Routes goes here!*/}
          <NavigationBar />
          <Switch>
            {/*Switch decides which component to show based on the current URL*/}
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/hardwares" component={Hardwares} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/howTo" component={HowTo} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/myKolam" component={MyKolamMain} />
            <Route exact path="/login" component={Login}>
              <Login />
            </Route>
            <Redirect to="404" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
