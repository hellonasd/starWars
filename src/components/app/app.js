import React from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-detail";
import { Record } from "../item-detail/item-detail";
import { SwapiServiceProvider } from "../swapi-service-contex";
import DummySwapiService from '../../services/dummy-swapi-service';

import "./app.css";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/index";

export default class App extends React.Component {
  swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService : new DummySwapiService(),
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
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
    this.setState(({ swapiService })=> {
      const Service = swapiService instanceof SwapiService ?
                    DummySwapiService : SwapiService;
      return {
        swapiService : new Service()
      }
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      
    } = this.state.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange}/>
          {/* {planet} */}

          {/* <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div> */}

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />

          <PersonList />

          <StarshipList />

          <PlanetList />

          {/* <Row left={personDetails} right={starshipDetails} /> */}
        </SwapiServiceProvider>
      </div>
    );
  }
}
