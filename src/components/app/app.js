import React from "react";
import Header from "../header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-contex";
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipsPage } from "../pages";

import "./app.css";

export default class App extends React.Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
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
            <Route path='/people' component={PeoplePage} />
            <Route path='/planet' component={PlanetPage} />
            <Route path='/starship' component={StarshipsPage} />

          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
