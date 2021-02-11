import React from "react";
import Header from "../header";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-contex";
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet";
import {
  PeoplePage,
  PlanetPage,
  StarshipsPage,
  SecretPage,
  LoginPage,
} from "../pages";
import "./app.css";
import { StarshipDetails } from "../sw-components";

export default class App extends React.Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Switch>
              <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planet" component={PlanetPage} />
              <Route exact path="/starship" component={StarshipsPage} />
              <Route
                path="/starship/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={this.state.isLoggedIn}
                    onLogin={this.onLogin}
                  />
                )}
              />
              <Route
                path="/secret"
                render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />}
              />
              <Route
                render={() => {
                  return <h2>page not found</h2>;
                }}
              />
            </Switch>
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
