import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
const aTheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const MainPage = React.lazy(() => import("./views/home"));

const Page404 = React.lazy(() =>
  import("./views/helper/pages/page404/Page404")
);
const Page500 = React.lazy(() =>
  import("./views/helper/pages/page500/Page500")
);

class App extends Component {
  componentWillMount() {
    console.log("appuserdata: " + sessionStorage.getItem("userData"));
  }

  render() {
    const logic = () => {
      if (true) {
        return (
          <Route
            path="/"
            name="Home"
            render={(props) => <uTheLayout {...props} />}
          />
        );
      } else {
        return (
          <Route
            path="/"
            name="Home"
            render={(props) => <aTheLayout {...props} />}
          />
        );
      }
    };

    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/mainPage"
              name="Main Page"
              render={(props) => <MainPage {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
            {/* {logic} */}
            {/* <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
              // render={(props) => {
              //   console.log("masuk");
              //   if (true) {
              //     <uTheLayout {...props} />;
              //   } else {
              //     <aTheLayout {...props} />;
              //   }
              // }}
            /> */}
            <Redirect to="/404" />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
